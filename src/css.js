body{
    margin: 80px;
    background: #faf8ef;
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
    color: #776e65;
}
.container{
    width: 500px;
    margin: 0 auto 0 auto;
}
.heading:after {
    content: "";
    display: block;
    clear: both; 
}

h1.title {
    font-size: 80px;
    font-weight: bold;
    margin: 0;
    display: block;
    float: left; 
}
.score_container {
    float: right;
}
.scores, .bestScore {
    position: relative;
    display: inline-block;
    background: #bbada0;
    padding: 15px 32px;
    font-size: 25px;
    height: 25px;
    line-height: 47px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    margin-top: 8px;
    text-align: center;
}
.scores:after, .bestScore:after {
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
    /*text-transform: uppercase;*/
    font-size: 13px;
    line-height: 13px;
    color: #eee4da; 
}
.scores:after {
    content: "Scores";
}
.bestScore:after {
    content: "Best Score";
}
@-webkit-keyframes 'scoreAddition' {
    from {
        opacity: 1;
        top: 25px;
    }
    to {
        opacity: 0;
        top: -25px;
    }

}
.scores .score-addition, .bestScore .score-addition {
    position: absolute;
    right: 37px;
    color: red;
    font-size: 25px;
    line-height: 25px;
    font-weight: bold;
    color: rgba(119, 110, 101, 0.9);
    z-index: 100;
    -webkit-animation: scoreAddition 600ms ease-in;
}
.game_infor:after {
    content: "";
    display: block;
    clear: both; 
}
.game_intro {
    float: left;
    line-height: 25px;
    margin-bottom: 0;
    font-weight: bold;
}
.game_restart {
    display: inline-block;
    background: #8f7a66;
    border-radius: 3px;
    padding: 0 20px;
    font-size: 25px;
    font-weight: bolder;
    color: #f9f6f2;
    height: 40px;
    line-height: 42px;
    cursor: pointer;
    text-align: center;
    float: right; 
}
.game_container{
    margin-top: 35px;
    position: relative;
    cursor: default;
    -webkit-box-sizing: border-box;
    background: #bbada0;
    width: 500px;
    height: 500px;    
    border-radius: 6px;
}
.game_container div{
    background: rgba(238, 228, 218, 0.73);
    float: left;
    margin: 14.4px 0 0 14.4px;
    /*padding: auto 0 0 0;*/
    border-radius: 10px;
    height: 107px;
    width: 107px;
    vertical-align: middle;
    text-align: center;
    line-height: 1.99;
    font-size: 55px;
    font-weight: bold;
}

@-webkit-keyframes 'numBlink' {
    from {
        opacity: 1;
        -webkit-transform: scale(1);
    }
    50% {
        opacity: 0.9;
        -webkit-transform: scale(1.2);
    }
    to {
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

@-webkit-keyframes 'numAppear' {
    from {
        opacity: 0.6;
        -webkit-transform: scale(0.6);
    }
    to {
        opacity: 1;
        -webkit-transform: scale(1);
    }
}

.game_container .Num2 {
    background: #eee4da;
}
.game_container .Num2_Blink {
    background: #eee4da;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num2_Appear {
    background: #eee4da;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num4 {
    background: #ede0c8;
}
.game_container .Num4_Blink {
    background: #ede0c8;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num4_Appear {
    background: #ede0c8;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num8 {
    color: #f9f6f2;
    background: #f2b179;
}
.game_container .Num8_Blink {
    color: #f9f6f2;
    background: #f2b179;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num8_Appear {
    color: #f9f6f2;
    background: #f2b179;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num16 {
    color: #f9f6f2;
    background: #f59563;
}
.game_container .Num16_Blink {
    color: #f9f6f2;
    background: #f59563;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num16_Appear {
    color: #f9f6f2;
    background: #f59563;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num32 {
    color: #f9f6f2;
    background: #f67c5f;
}
.game_container .Num32_Blink {
    color: #f9f6f2;
    background: #f67c5f;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num32_Appear {
    color: #f9f6f2;
    background: #f67c5f;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num64 {
    color: #f9f6f2;
    background: #f65e3b;
}
.game_container .Num64_Blink {
    color: #f9f6f2;
    background: #f65e3b;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num64_Appear {
    color: #f9f6f2;
    background: #f65e3b;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num128 {
    color: #f9f6f2;
    background: #edcf72;
    font-size: 45px;
    line-height: 2.3;
}
.game_container .Num128_Blink {
    color: #f9f6f2;
    background: #edcf72;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num128_Appear {
    color: #f9f6f2;
    background: #edcf72;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num256 {
    color: #f9f6f2;
    background: #edcc61;
    font-size: 45px;
    line-height: 2.3;
}
.game_container .Num256_Blink {
    color: #f9f6f2;
    background: #edcc61;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num256_Appear {
    color: #f9f6f2;
    background: #edcc61;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num512 {
    color: #f9f6f2;
    background: #edc850;
    font-size: 45px;
    line-height: 2.3;
}
.game_container .Num512_Blink {
    color: #f9f6f2;
    background: #edc850;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num512_Appear {
    color: #f9f6f2;
    background: #edc850;
    font-size: 45px;
    line-height: 2.3;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num1024 {
    color: #f9f6f2;
    background: #edc53f;
    font-size: 35px;
    line-height: 2.9;
}
.game_container .Num1024_Blink {
    color: #f9f6f2;
    background: #edc53f;
    font-size: 35px;
    line-height: 2.9;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num1024_Appear {
    color: #f9f6f2;
    background: #edc53f;
    font-size: 35px;
    line-height: 2.9;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}
.game_container .Num2048 {
    color: #f9f6f2;
    background: #edc22e;
    font-size: 35px;
    line-height: 2.9;
}
.game_container .Num2048_Blink {
    color: #f9f6f2;
    background: #edc22e;
    font-size: 35px;
    line-height: 2.9;
    -webkit-animation-name: numBlink;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 2;
}
.game_container .Num2048_Appear {
    color: #f9f6f2;
    background: #edc22e;
    font-size: 35px;
    line-height: 2.9;
    -webkit-animation-name: numAppear;
    -webkit-animation-duration: 400ms;
    -webkit-animation-iteration-count: 1;
}

@media screen and (max-width: 520px) {
    body {
        margin: 50px 67px 0 67px;
        width: 280px;
        /*padding: 20px;*/
    }
    .container {
        width: 280px;
        margin: 0 auto;
    }
    .heading {
        margin-bottom: 10px;
    }
    h1.title {
        font-size: 40px;
        margin-top: 15px;
    }
    .scores, .bestScore {
        margin-top: 9px;
        font-size: 20px;
        padding: 13px 14px;
        min-width: 44px;
    }
    .scores:after, .bestScore:after {
        top: 10px;
        font-size: 13px;
        line-height: 10px; 
    }
    .scores .score-addition, .bestScore .score-addition {
        right: 32px;
        font-size: 20px;
        line-height: 25px;
    }
    .game_intro {
        width: 55%;
        font-size: 13px;
        display: block;
        box-sizing: border-box;
        line-height: 1.6;
    }
    .game_restart {
        width: 35%;
        font-size: 19px;
        padding: 0;
        display: block;
        box-sizing: border-box;
        margin-top: 5px;
    }
    .game_container {
        margin-top: 17px;
        width: 280px;
        height: 280px;
        font-size: 31px;
    }

    .game_container div{
        margin: 10px 0 0 10px;
        border-radius: 6px;
        height: 57px;
        width: 57px;
        font-size: 31px;
    }
    .game_container .Num128 {
        font-size: 25px;
    }
    .game_container .Num128_Appear {
        font-size: 25px;
    }
    .game_container .Num128_Blink {
        font-size: 25px;
    }
    .game_container .Num256 {
        font-size: 25px;
    }
    .game_container .Num256_Appear {
        font-size: 25px;
    }
    .game_container .Num256_Blink {
        font-size: 25px;
    }
    .game_container .Num512 {
        font-size: 25px;
    }
    .game_container .Num512_Appear {
        font-size: 25px;
    }
    .game_container .Num512_Blink {
        font-size: 25px;
    }
    .game_container .Num1024 {
        font-size: 20px;
    }
    .game_container .Num1024_Appear {
        font-size: 20px;
    }
    .game_container .Num1024_Blink {
        font-size: 20px;
    }
    .game_container .Num2048 {
        font-size: 20px;
    }
    .game_container .Num2048_Appear {
        font-size: 20px;
    }
    .game_container .Num2048_Blink {
        font-size: 20px;
    }

}
@media screen and (max-width: 400px) {
    body {
        margin: 35px 67px 0 67px;
        width: 240px;
        /*padding: 20px;*/
    }
    .container {
        width: 240px;
        margin: 0 auto;
    }
    .heading {
        margin-bottom: 10px;
    }
    h1.title {
        font-size: 35px;
        margin-top: 15px;
    }
    .scores, .bestScore {
        margin-top: 9px;
        font-size: 15px;
        padding: 8px 11px;
        min-width: 44px;
    }
    .scores:after, .bestScore:after {
        top: 9px;
        font-size: 12px;
        line-height: 10px; 
    }
    .scores .score-addition, .bestScore .score-addition {
        right: 32px;
        font-size: 20px;
        line-height: 25px;
    }
    .game_intro {
        width: 60%;
        font-size: 8px;
        display: block;
        box-sizing: border-box;
        line-height: 1.5;
    }
    .game_restart {
        width: 35%;
        font-size: 16px;
        padding: 0;
        display: block;
        box-sizing: border-box;
        margin-top: 4px;
    }
    .game_container {
        margin-top: 17px;
        width: 240px;
        height: 240px;
        font-size: 31px;
    }

    .game_container div{
        margin: 10px 0 0 10px;
        border-radius: 6px;
        height: 47px;
        width: 47px;
        font-size: 25px;
    }
    .game_container .Num128 {
        font-size: 20px;
    }
    .game_container .Num128_Appear {
        font-size: 20px;
    }
    .game_container .Num128_Blink {
        font-size: 20px;
    }
    .game_container .Num256 {
        font-size: 20px;
    }
    .game_container .Num256_Appear {
        font-size: 20px;
    }
    .game_container .Num256_Blink {
        font-size: 20px;
    }
    .game_container .Num512 {
        font-size: 20px;
    }
    .game_container .Num512_Appear {
        font-size: 20px;
    }
    .game_container .Num512_Blink {
        font-size: 20px;
    }
    .game_container .Num1024 {
        font-size: 17px;
    }
    .game_container .Num1024_Appear {
        font-size: 17px;
    }
    .game_container .Num1024_Blink {
        font-size: 17px;
    }
    .game_container .Num2048 {
        font-size: 17px;
    }
    .game_container .Num2048_Appear {
        font-size: 17px;
    }
    .game_container .Num2048_Blink {
        font-size: 17px;
    }
}