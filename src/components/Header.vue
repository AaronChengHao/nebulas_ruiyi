<style scoped>
    .ivu-menu-item{
        font-size:18px;
    }
    .ivu-layout-header{
        background:#2d8cf0;
    }
    .ivu-menu-horizontal{
        line-height: 63px;
    }
</style>
<template>
    <div>
        <Header>
            <Menu mode="horizontal" theme="primary" active-name="1">
                <li style="float: left;width: 180px;padding-top: 10px;">
                    <img src="https://incentive.nebulas.io/assets/images/nebulasx60.png" style="max-width: 100%;" alt="">
                </li>
                <li style="float: left;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <router-link to="/">
                <MenuItem name="1">
                    <Icon type="home"></Icon>
                    睿懿成长影像
                </MenuItem>
                </router-link>
                <router-link  to="upload">
                <MenuItem name="2">
                    <Icon type="upload"></Icon>
                    上传照片
                </MenuItem>
                </router-link>
                <router-link  to="explain">
                <MenuItem name="4">
                    <Icon type="more"></Icon>
                    睿懿
                </MenuItem>
                </router-link>
            </Menu>
        </Header>
    </div>
</template>
<script>
    export default{}
</script>
