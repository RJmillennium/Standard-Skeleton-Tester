<script>
    import { writable } from 'svelte/store';
    import { FileDropzone, focusTrap } from '@skeletonlabs/skeleton';
    let isFocused = true;
    let selected = writable(null);
    import PaymentImage from '$lib/images/techopedia_payment_qr.jpg'
    selected = 1;
</script>
    
    <section class="section flex justify-center items-center">
        
        <div class="w-[90%] h-[100%] min-h-[100vh]">
            <form class="w-full card p-4 text-token grid grid-cols-2 gap-5" use:focusTrap={isFocused}>
                <div class="firstplayer flex flex-col gap-5 p-5">
                    <h3 class="h3">Player 1</h3>
                    <label class="label">
                        <span>Name</span>
                        <input class="input" type="text" placeholder="Enter name..." required />
                    </label>
                    <label class="label">
                        <span>Email</span>
                        <input class="input" type="email" placeholder="Enter email address..." required />
                    </label>
                    <label class="label">
                        <span>Phone Number</span>
                        <input class="input" type="tel" placeholder="Enter phone number..." required />
                    </label>
                    <label class="label">
                        <span>Gender</span>
                        <select class="select"required >
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                        <!-- <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" checked name="radio-direct" value="1" />
                            <p></p>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input class="radio" type="radio" name="radio-direct" value="2" />
                            <p>Option 2</p>
                        </label> -->
                    </label>
                    <!-- <label class="label">
                        <span>College</span>
                        <input class="input" type="tel" placeholder="College / Organisation / School" />
                    </label>
                    <label class="label">
                        <span>PRN</span>
                        <input class="input " type="tel" placeholder="PRN / Roll Number" />
                    </label> -->
                </div>
                <div class="firstplayer flex flex-col gap-5 p-5">
                    <h3 class="h3">Player 2</h3>
                    <label class="label">
                        <span>Name</span>
                        <input class="input" type="text" placeholder="Enter name..."  />
                    </label>
                    <label class="label">
                        <span>Email</span>
                        <input class="input" type="email" placeholder="Enter email address..."  />
                    </label>
                    <label class="label">
                        <span>Phone Number</span>
                        <input class="input" type="tel" placeholder="Enter phone number..." />
                    </label>
                    <label class="label">
                        <span>Gender</span>
                        <select class="select">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                        <!-- <input class="input" type="txt" placeholder=". . ." /> -->
                    </label>
                </div>
                
                <div class="filezone limiter col-span-2 justify-center items-center flex flex-col gap-5 mx-[25%]">
                    <label class="label">
                        <span>Payment Method</span>
                        <select class="select" 	bind:value={selected}
                        onchange={()=> (console.log(selected))}>
                            <option value={1}>Online</option>
                            <option value={2}>Offline</option>
                        </select>
                    </label>
                        {#if selected == 1}
                        <img src={PaymentImage} alt="payment" class="rounded-xl">
                        <FileDropzone name="files" slotLead='self-center' regionInterfaceText='flex flex-col items-center' required accept="image/*">
                            <svelte:fragment slot="lead">
                            </svelte:fragment>
                            <svelte:fragment slot="message">Upload the Screenshot for payment</svelte:fragment>
                            <svelte:fragment slot="meta">PNG, JPG, and GIF allowed.</svelte:fragment>
                        </FileDropzone>
                        {:else if selected == 2}
                         <input type="text" class="input" placeholder="Enter the name of the person you've paid to " required />
                         {:else}
                         <span>Select a payment method ↑</span>
                        {/if}
                        <div class="text-center w-full flex ">
                            <button class="btn variant-filled mt-4 flex-grow text-xl">Submit Form</button>
                        </div>
                </div>
            </form>
        </div>
    </section>
    