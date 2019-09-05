import React from 'react';
import moment from 'moment';


const MessageBox = (props) =>{
    return(
        <div>
            <div class="tweetEntry">
                <div class="tweetEntry-content">
                    <a class="tweetEntry-account-group" href="/">
                        <img alt='test' class="tweetEntry-avatar" src={props.img}/>
                        <strong class="tweetEntry-fullname">
                        {props.name}
                        </strong>
                        <span class="tweetEntry-username">
                        @<b>{props.profile}</b>
                        </span>
                        <span class="tweetEntry-timestamp">- {moment().format('h:mm a')}</span>
                        </a>
                        <div className="tweetEntry-text-container">
                            {props.msg}
                        </div>
                </div>
                <div class="optionalMedia" Style="display:none;">
                        <img class="optionalMedia-img" src="https://i.imgur.com/kOhhPAk.jpg" alt='anotherIMG'/>
                </div>
                <div class="tweetEntry-action-list" Style="line-height:24px;color: #b1bbc3;">
                        <i class="fa fa-reply" Style="width: 80px;"></i>
                        <i class="fa fa-retweet" Style="width: 80px"></i>
                        <i class="fa fa-heart" Style="width: 80px"></i>
                        <span Style='color:#1DA1F2; font-weight: 570; font-size:100%;'>Twiiter for {props.device}</span>          
                </div>
            </div>
        </div>
    )
}

export { MessageBox as default } ;


// <div className='message_box'>
// <div>
//     <div className ='box_img'>
//         <img src='../assets/yair.jpg'/>
//     </div>
//     <div className ='msg_header col-12'>
//         <div className = 'name'>
//             <p>{props.name}</p>
//         </div>
//         <div className = 'profile'>
//             <p>{props.profile}</p>
//         </div>
//     </div>
// </div>
// <div className ='msg_msg col-12'>
//     <p>{props.msg}</p>
// </div>
// <p>HOLLA</p>
// </div>