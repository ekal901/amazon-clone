<template>
    <div id="signIn__wrap">
        <h2>Welcome</h2>
        <div class="signIn__wrap--border">
            <div class="signIn__container"><input type="radio"><label><b>Create account</b></label>&nbsp;<span>New to Amazon?</span></div>
            <div class="signIn__container white">
                <div><input type="radio"><label><b>Sign-In.</b></label>&nbsp;<span><b>Already a customer?</b></span></div>
                <div>
                    <input type="text" placeholder="Email (phone for mobile accounts)">
                </div>
                <div>
                    <button type="button">Continue</button>
                </div>
                <div>
                    <p>By continuing, you agree to Amazon's <a>Condition of Use</a> and <a>Privacy Notice</a>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#signIn__wrap {
    min-width: 20rem;
    padding: 1.2rem 1.4rem 2.8rem;
    margin: 0 auto;
    max-width: 400px;
    background: #f3f3f3;
    .signIn__wrap--border {
        border: .1rem #ddd solid;
        .signIn__container {
            &.white {
                background-color: #fff;
            }
        }
    }
}
</style>