<template>

  <div class="navbar" >
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />
    <div class="right-menu">
      <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
            <screenfull class="screenfull right-menu-item"/>
      </el-tooltip>

      <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
        <size-select class="international right-menu-item"/>
      </el-tooltip>

      <lang-select class="international right-menu-item"/>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img 
          :src    = "avatar+'?imageView2/1/w/80/h/80'"
            class = "user-avatar"
            v-if  = "avatar">
          <span v-else class="glyphicon glyphicon-user user-avatar defaultPhoto"></span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <router-link class="inlineBlock" to="/personalCenter/basicData">
            <el-dropdown-item>
              {{ $t('navbar.personalInfo') }}
            </el-dropdown-item>
          </router-link>

          <el-dropdown-item>
            <span style="display:block;" @click="openChangePasswordModel">
              {{ $t('navbar.resetPassword') }}
            </span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">
              {{ $t('navbar.logOut') }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

  <!-- 个人资料卡 对话框 -->
  <!-- <el-dialog :title="个人资料" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="$ ('table.type')" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date"/>
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="temp.title"/>
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;"/>
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="Please input"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{ $t('table.confirm') }}</el-button>
        <el-button v-else type="primary" @click="updateData">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog> -->

</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import sizeSelect from '@/components/sizeSelect'
import langSelect from '@/components/langSelect'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    sizeSelect,
    langSelect
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    openUserInfoModel() {

    },
    openChangePasswordModel() {

    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height       : 50px;
  line-height  : 50px;
  border-radius: 0px !important;
  border-bottom: 1px solid #ececec;
  .hamburger-container {
    line-height: 58px;
    height     : 50px;
    float      : left;
    padding    : 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .right-menu{
    float : right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
        display: inline-block;
        margin : 0 10px;
      }
    .screenfull {
      height    : 20px;
      margin-top: 15px;
    }
    .international{
        vertical-align: top;
      }
    .avatar-container {
      height      : 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor    : pointer;
        margin-top: 5px;
        position  : relative;
        .user-avatar {
          width        : 40px;
          height       : 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position : absolute;
          right    : -20px;
          top      : 25px;
          font-size: 12px;
        }
      }
    }

    .defaultPhoto{
      font-size    : 30px;
      line-height  : 40px;
      border       : 1px solid #ccc;
      border-radius: 10px;
      padding-left : 4px;
      color        : #2d4458;
      top          : -5px;
    }
  }
}
</style>

