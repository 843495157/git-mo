<template>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <!-- <Icon type="ios-paper" /> -->
               首页
            </MenuItem>
            <MenuItem name="2">
                <!-- <Icon type="ios-people" /> -->
                喜剧片
            </MenuItem>
            <MenuItem name="3">
                动作片
            </MenuItem>
            <MenuItem name="4">
                <!-- <Icon type="ios-construct" /> -->
               爱情片
            </MenuItem>
        </Menu>
    </template>
    <script>
        export default {
            data () {
                return {
                    theme1: 'light'
                }
            }
        }
    </script>
    <style scoped>
        .ivu-menu{
            display: flex;
            justify-content: space-evenly;
        }
        .ivu-menu-light{
            background: none;
            height: 100%;
        }
        .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
            border-bottom: none;
            color: greenyellow;
        }
        .ivu-menu-horizontal.ivu-menu-light:after{
            display: none;
        }
        .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
        transition: none;
    }
    </style>