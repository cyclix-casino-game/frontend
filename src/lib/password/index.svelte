<script>
    import { browser} from '$app/environment';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    let password = "cyg1"
    $: pass = ""
    $: error = null
    $: isLoading = false

const handleSubmit = (()=>{
    isLoading = true
    if(pass === password){
        setTimeout(()=>{
            isLoading = false
            browser &&  sessionStorage.setItem('password', true);
            dispatch("close")
        },2000)
    }else{
        setTimeout(()=>{
            error = "Incorrect password"
            isLoading = false
            setTimeout(()=>{
                error = ""
            },5000)
        },2000)
    }
})

</script>

<div class="keoirns Wenen">
    <div class="title"> <span>This website is encrypted</span> <br> Please enter the website</div>
    <input type="password" placeholder="Enter password" bind:value={pass}>
    <div style="padding: 5px; color: red">{error || ""}</div>
    <button on:click={handleSubmit}>{isLoading ? "Validating Password...." : "Proceed"}</button>
</div>


<style>
.Wenen{
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    background: #1a1d29;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100000000000000000;
}
.title{
    width: 30%;
    padding: 10px;
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
}
.title span{
    color: palevioletred;
    font-size: 23px;
    padding: 10px;
}
.Wenen input {
    width: 30%;
    padding: 18px;
    border-radius: 30px;
    font-size: 17px;
    font-weight: bold;
    color: black;
}
button{
    background: palevioletred;
    padding: 18px;
    margin: 20px;
    width: 30%;
    color: #ffff;
    border-radius: 30px;
}
</style>