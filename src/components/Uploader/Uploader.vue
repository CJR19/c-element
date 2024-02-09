<template>
    <div class="c-uploader">
        <div class="c-uploader__select">
            <input 
                type="file"
                multiple
                class="c-uploader__select--input"
                @change="handleFileChange"
            />
        </div>
        <div class="c-uploader__preview" >
            <img :src="previewSrc" alt="">
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue'
const legalExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
const previewSrc = ref('')

const handleFileChange = (e: Event) => {
    // 验证
    const input = e.target as HTMLInputElement
    if (!input.files || input.files.length === 0) return
    const file = input.files[0]
    if (!validateFile(file)) return

    // 显示预览图
    const reader = new FileReader()
    reader.onload = (e)=> {
        console.log(e.target!.result)
        previewSrc.value = e.target?.result as string
    }
    reader.readAsDataURL(file)


}

const validateFile = (file: File) => {
    const name = file.name.toLowerCase()
    const ext = name.slice(name.lastIndexOf('.') + 1)
    const isLegalExt = legalExts.includes(ext)
    if (!isLegalExt) {
        console.log('文件格式不允许!')
        return isLegalExt
    }
    const { size } = file
    const isLt2M = size / 1024 / 1024 < 2
    if (!isLt2M) {
        console.log('文件大小不能超过 2MB!')
        return isLt2M
    }

    return isLt2M && isLegalExt

}

</script>
    
<style></style>