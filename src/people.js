
import face from './images/icon-facebook.svg'
import insta from './images/icon-instagram.svg'
import twi from './images/icon-twitter.svg'
import pint from './images/icon-pinterest.svg'


const dataClient = {
 clientes :[
    {
        nome: "Emily R.",
        img: require("./images/image-emily.jpg"),
        bio: "We put or trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        profissao:"Marketing Director" 
    },
    {
        nome: "Thomas S.",
        img: require("./images/image-thomas.jpg"),
        bio: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s sucess made it a satisfying and enjoyabke experience.",
        profissao:"Chief Operating Officer" 
    },

    {
        nome: "Jennie F.",
        img: require("./images/image-jennie.jpg"),
        bio: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        profissao:"Business Owner" 
    }
 ],

 serviços:[
    {
        img : require("./images/desktop/image-gallery-milkbottles.jpg")
    },
    {
        img : require("./images/desktop/image-gallery-orange.jpg")
    },
    {
        img : require("./images/desktop/image-gallery-cone.jpg")
    },
    {
        img : require("./images/desktop/image-gallery-sugarcubes.jpg")
    }
 ],

 social:[
    {
        img : face
    },
    {
        img : insta
    },
    {
        img : twi
    },
    {
        img : pint
    }
 ]
    
}

export default dataClient;