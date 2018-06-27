<style scoped>
    .upload-box{
        margin: 130px auto;
        min-height: 300px;
        width: 900px;
        border: 1px solid #eee;
    }
</style>
<template>
    <div class="upload-box">
        <div>
            <Form >
                <Img @addUrl='addImgUrl'></Img>
<!--                 <FormItem label="Age" prop="age">
                    <Input type="text" v-model="formCustom.age" number></Input>
                </FormItem> -->
                <div style="text-align: center;">
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                </FormItem>
                </div>

            </Form>
        </div>
    </div>
</template>
<script>
    import Img from '@/components/Img';
    import tool from '@/lib/tool';
    import NebApi from '@/lib/NebApi';
    var nebApi = new NebApi();
    export default {
        data () {
            return {
                urls:[],
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                }
            }
        },
        components:{
            Img
        },
        methods: {
            handleSubmit (name) {
                if (this.urls.length == 0) {
                    this.$Notice.warning({
                        title: '提交错误',
                        desc: '请上传图片后提交!'
                    });
                    return false;
                }
                // (srcs,time,address = '',extend = '')
                var srcs = this.urls;
                var time = this.time();
                var address = '';
                var extend = '';
                srcs = srcs.join(',');
                nebApi.set(srcs,time,address,extend,res => {
                    this.$Notice.success({
                        title:'提交成功',
                        desc:'记录提交成功!!'
                    });
                    this.$router.push({path:'/'});
                });

                nebApi.getAll(res => {
                    console.log(res);
                },err => {
                    console.log(err);
                })
                console.log(srcs);
                return false;

            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            addImgUrl(url){
                this.urls.push(url);
                console.log(this.urls);
            },
            time(){
                var tmp = Date.parse( new Date() ).toString();
                tmp = tmp.substr(0,10);
                return tmp;
            },
        }
    }
</script>
