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
                    theme1: 'dark'
                }
            }
        }
    </script>
    <style scoped>
        .ivu-menu{
            display: flex;
            justify-content: space-evenly;
        }
    </style>