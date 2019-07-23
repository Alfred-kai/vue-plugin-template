<template>
  <div>
    <div
      class="item"
      :class="{'border-bottom':level===0 || index+1 !==treeData.length,'active':item.id === currentNodeId}"
      v-for="(item,index) in treeData"
      :key="index"
      @click.stop="clickNode(item,$event)"
    >
      <i class="dot"></i>
      <span>{{item.name}}</span>

      <span class="status">
        <span v-if="item.status===0" class="null">空</span>
        <span v-if="item.status===1" class="uncompleted">未完成</span>
        <span v-if="item.status===2" class="completed">已完成</span>
        <i
          @click.stop="expandNode(item)"
          class="arrow"
          :class="{'fa fa-chevron-down':item.children && item.children.length>0,'rotate180':item.expand}"
        ></i>
      </span>
      <!-- <transition name="fade"> -->
      <div
        class="chidlNode"
        :class="{'height0':!item.expand}"
        :style="{'height':item.children && 45*item.children.length + 'px'}"
      >
        <vue-easy-nav
          ref="childTree"
          :treeData="item.children"
          @cancelDot="cancelDot()"
          :level="1*level+1"
        ></vue-easy-nav>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "vueEasyNav",
  props: {
    treeData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    accordion: {
      type: Boolean,
      default: false
    },
    isTab: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentNodeId: 1, // 当前选中月
      isExpand: false,
      handledTreeData: [],
      accordionBox: []
    };
  },
  methods: {
    cancelDot() {
      this.currentNodeId = -1;
    },

    cancelParentDot() {
      this.$emit("cancelDot");
    },

    cancelChildDot() {
      if (!this.$refs.childTree) return;
      Array.prototype.map.call(this.$refs.childTree, child => {
        child.cancelDot();
      });
    },

    clickNode(item) {
      this.currentNodeId = item.id;
      this.$emit("status", item.status);
      this.cancelParentDot();
      this.cancelChildDot();
    },
    expandNode(item) {
      item.expand = !item.expand;

      if (item.expand) {
        if (!this.accordion) {
          this.accordionBox.map(node => {
            node.expand = false;
          });
          this.accordionBox = [];
        }
        this.accordionBox.push(item);
      }

      if (!item.expand) {
        const index = this.accordionBox.findIndex(node => {
          return node.id === item.id;
        });
        this.accordionBox.splice(index, 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.chidlNode {
  width: 300px;
  overflow: hidden;
  transform: translate(-15px, 12px);
  transition: height ease 0.5s;
}
.height0 {
  height: 0px !important;
}
.fade-enter-active {
  transition: height 1.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
.border-bottom {
  border-bottom: 1px solid #242424;
}
.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 15px;
  transform: translateY(-1px);
}
.active {
  & > i:first-child {
    background: #34ac37;
  }
  & > span:first-of-type {
    color: #fff;
  }
}
.item {
  // height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(150, 151, 153, 1);
  line-height: 18px;
  padding: 12px 15px;
  // border-bottom: 1px solid #242424;
  cursor: pointer;
  &:first-child {
    border-top: 1px solid #242424;
  }
  &:hover {
    // background: #525050;
  }
}
.status {
  float: right;
  span {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 0 5px;
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    margin-right: 12px;
  }

  .completed {
    border: 1px solid rgba(46, 154, 49, 1);
    color: rgba(46, 154, 49, 1);
  }
  .uncompleted {
    border: 1px solid rgba(237, 149, 17, 1);
    color: rgba(237, 149, 17, 1);
  }
  .null {
    font-size: 14px;
    color: rgba(150, 151, 153, 1);
  }
  .arrow {
    float: right;
    width: 16px;
    transition: all ease-in 0.2s;
  }
  .rotate180 {
    transform: rotate(180deg);
  }
}
</style>


