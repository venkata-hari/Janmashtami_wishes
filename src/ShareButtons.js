import React from 'react'
import { LinkedinShareButton, WhatsappShareButton, TwitterShareButton, LinkedinIcon, WhatsappIcon, TwitterIcon } from 'react-share'
function ShareButtons() {
    return (
        <div className='share-buttons'>
            <LinkedinShareButton url="https://venkata-hari.github.io/Janmashtami_wishes/" quote="“ May Lord Krishna always shower his blessings on you.
            And may every year Janmashtami bring lots of happiness for you and your family.
            Wishing you a very Happy Janmashtami.👇" className='icon'>
                <LinkedinIcon size={40} square='true' />
            </LinkedinShareButton>
            <WhatsappShareButton url="*“ May Lord Krishna always shower his blessings on you.
            And may every year Janmashtami bring lots of happiness for you and your family.
            Wishing you a very Happy Janmashtami.*.👇 https://venkata-hari.github.io/Janmashtami_wishes/" className='icon' >
                <WhatsappIcon size={40} square='true' />
            </WhatsappShareButton>
            <TwitterShareButton url="“ May Lord Krishna always shower his blessings on you.
            And may every year Janmashtami bring lots of happiness for you and your family.
            Wishing you a very Happy Janmashtami..👇 https://venkata-hari.github.io/Janmashtami_wishes/" className='icon'>
                <TwitterIcon size={40} square='true' />
            </TwitterShareButton>

        </div>
    )
}

export default ShareButtons