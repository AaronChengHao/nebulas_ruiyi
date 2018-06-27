<style scoped>

    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
    .content-box
    {
        padding: 50px 0px 50px 200px;
    }

    .content-box .img-list
    {
        display: flex;
        flex-wrap: wrap;
    }
    .ivu-card
    {
        margin-right: 10px;
        margin-top: 10px;
    }
    .ivu-card-body{
        padding:5px;
    }



</style>
<template>
    <div class="layout">

        <Content class="content-box">
            <Timeline>
                <template v-for="record in records">
                <TimelineItem>
                        <p class="time">{{record.time}}</p>
                        <div class="img-list">
                            <template v-for="url in record.srcs">
                            <Card style="width:280px;" >
                                <div style="text-align:center">
                                    <img :src="url" style="max-width: 100%;" @click='preview(url)'>
                                    <!-- <h3>A high quality UI Toolkit based on Vue.js</h3> -->
                                </div>
                            </Card>
                            </template>
                        </div>
                </TimelineItem>

                </template>

            </Timeline>
        </Content>
    <Modal title="小睿懿" v-model="visible">
        <img :src="previewUrl" v-if="visible" style="width: 100%">
    </Modal>

    <div style="display: flex;justify-content: center;align-items: center;" v-show="isLoading">
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
        <Spin></Spin>
    </div>









    </div>

</template>
<script>
    import tool from '@/lib/tool';
    import NebApi from '@/lib/NebApi';
    var nebApi = new NebApi();
    export default {
        name: 'HelloWorld',
        data () {
            return {
                records:[],
                visible:false,
                previewUrl:'',
                isLoading:true
            }
        },
        methods:{
            preview( url ){
                this.previewUrl = url;
                this.visible = true;
            }
        },
        created(){
            nebApi.getAll(res => {
                var records = res.result;
                var records = JSON.parse(records);
                records.reverse();
                records.map((elem,index) => {
                    elem.srcs = elem.srcs.split(',');
                    elem.time = tool.fmtDate(elem.time);
                    return elem;
                })
                this.records = records;
                this.isLoading =  false;
                console.log(this.records);
            },err => {
                console.log(err);
            });
            console.log(this.records);
        }

    }


</script>
