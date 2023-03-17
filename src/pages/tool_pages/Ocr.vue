<template>
    <div class="Ocr">
        <h1>OCR识别</h1>
        <p>将图片上的文字转换为可编辑的文本</p>
        <div class="main_doc">
            <div class="doc_drop"
            @dragover="handleDragOver"
            @drop="handleDrop"
            >
                <img src="../assets/upload.svg" alt="" width="70px">
                <el-button type="primary" class="button"
                >选择文件</el-button>
                <p>将文件拖拽至此或点击选择文件</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Ocr',
        data() {
            return {
                files: []
            }
        },
        methods:{
            handleDragOver(e){
                e.preventDefault(); //阻止浏览器默认行为
                console.log("文件拖动");
            },
            handleDrop(e){
                e.preventDefault();
                const files=e.dataTransfer.files;
                
                const formData = new FormData();
                for(let i = 0; i < files.length; i++) {
                    formData.append('file', files[i]);
                }

                axios.post('/upload',formData,{
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log("文件松开");
            }
        }
    }
</script>
<style>
    .Ocr h1{
        font-size: 48px;
        font-weight: 500;
        padding-bottom: 10px;
    }

    .Ocr p{
        font-size: 24px;
        font-weight: 400;
        color: #222a41b3;
    }

    .main_doc{
        height: 400px;
        background-color: #fff;
        margin: 50px 0;
    }

    .doc_drop{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .doc_drop img{
        padding: 50px 0;
    }
    .doc_drop p{
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
    }
    .button{
        width: 250px;
        height: 50px;
    }
    .button span{
        font-size: 20px;
    }
</style>