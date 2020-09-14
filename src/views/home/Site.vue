<template>
  <div>
    <van-nav-bar
      title="更换地址"
      left-text="返回"
      right-text="新增"
      left-arrow
      @click-left="back"
      @click-right="goNext"
    />
    <div class="Footer">
      <van-button color="#EE0A24" round block>选择该地址</van-button>
    </div>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />
    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { TrueAddress, deleAddress } from "@/api/user.js";
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [],
      id: [],
      // LIST: [],
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },
    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },
  methods: {
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },
    // // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },
    // 选中联系人
    onSelect() {
      this.showList = false;
    },
    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },
    onDelete(info) {
      this.showEdit = false;
      // console.log("wd");
      deleAddress({
        // params: {
        userid: this.$route.params.goodsId,
        areaId: this.id,
        // },
      })
        .then((res) => {
          console.log(res);
          console.log(this.id);
          console.log(this.$route.params.goodsId);
        })
        .catch((err) => {
          console.log(err);
        });
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
    back() {
      window.history.back();
    },
    goNext() {
      this.$router.push({
        name: "nextSite",
      });
    },
  },
  created() {
    TrueAddress({
      params: {
        page: 10,
        pageSize: 10,
      },
    })
      .then((res) => {
        // console.log(res.data);
        this.list = res.data;
        this.list.forEach((element) => {
          if (element.isDefault === true) {
            console.dir(element);
          }
        });
        // this.$store.dispatch("DIZHI", this.list);
        // this.list.forEach((ele) => {
        //   // console.log(ele.id)
        //   this.id = ele.id;
        //   // console.log(this.id)
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
