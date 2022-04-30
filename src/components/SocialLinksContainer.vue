<template>
    <v-container >
<v-row>
    <v-col v-for="link in links" align="center" :key="link.text">
        <v-btn @click="openLink(link.url)">
            <v-icon left>
                {{link.icon}}
            </v-icon>
        {{link.text}}
        </v-btn>
    </v-col>
    </v-row>
    </v-container>
</template>

<script>
import Vue from "vue"
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitter, mdiYoutube } from "@mdi/js"

export default Vue.extend ({
    name:"SocialLinksContainer",
    setup() {
        return {
            
        }
    },
    data(){
        return {
            links: [
                {
                    text: "Linkedin",
                    icon: mdiLinkedin,
                    url: "https://www.linkedin.com/in/stevengillen-ge/",
                },
                {
                    text: "Twitter",
                    icon: mdiTwitter,
                    url: "https://twitter.com/VenG_NFT",
                },
                {
                    text: "youtube",
                    icon: mdiYoutube,
                    url: "https://www.youtube.com/channel/UCmkWiS2LZblze2wrxX3ZJfQ",
                },
                // {
                //     text: "Facebook",
                //     icon: mdiFacebook,
                // },
                {
                    text: "GitHub",
                    icon: mdiGithub,
                    url: "https://github.com/mkdirsteve"
                },
                {
                    text: "Instagram",
                    icon: mdiInstagram,
                    url: "https://www.instagram.com/veng_nft/?hl=en"
                },
            ]
        }
    },
    methods: {
        openLink(url) {
            if (!url) return ;
            window.open(url, "_blank");
        }
    }
})
</script>
