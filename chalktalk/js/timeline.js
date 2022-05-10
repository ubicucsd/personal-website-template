function tableUpdate(link, target) {
    $.ajax(link).done(function(result){
        /*
        for(let i = 1; i<=3; i+=1){
            var input = `<div class="demo-card demo-card--step1">
            <div class="head">
                <div class="number-box">
                    <span>02/16</span>
                </div>
                <h2> Dr. Trey Ideker</h2>
            </div>
            <div class="demo-card-inner">
                <div class="body">
                    <img src="img/FA20_chalk_talk.png" alt="Graphic">
                </div>
            </div>
        </div>`;
            $(target).append(input);
        }
        */

        const inputs = 
        [`<div class="demo-card demo-card--step1">
            <div class="head">
                <div class="number-box">
                    <span>02/16</span>
                </div>
                <h2> Dr. Trey Ideker</h2>
            </div>
                <div class="body">
                    <img src="img/FA20_chalk_talk.png" alt="Graphic">
                </div>
        </div>`,
        `<div class="demo-card demo-card--step1">
            <div class="head">
                <div class="number-box">
                    <span>02/10</span>
                </div>
                <h2> Bradley Voytek</h2>
            </div>
            <div class="body">
                <img src="img/FA20_chalk_talk.png" alt="Graphic">
            </div>
        </div>`,
        `<div class="demo-card demo-card--step3">
            <div class="head">
                <div class="number-box">
                    <span>03/14</span>
                </div>
                <h2> Bradley Voytek</h2>
            </div>
            <div class="body">
                <img src="img/FA20_chalk_talk.png" alt="Graphic">
            </div>
        </div>`,
        `<div class="demo-card demo-card--step5">
        <div class="head">
            <div class="number-box">
                <span>05</span>
            </div>
            <h2> Brian Zid</h2>
        </div>
        <div class="body">
            <img src="img/latest_chalk_talk.png" alt="Graphic">
        </div>
    </div>`,
`<div class="demo-card demo-card--step4">
<div class="head">
    <div class="number-box">
        <span>04/12</span>
    </div>
    <h2> Elizabeth Winsler</h2>
</div>
<div class="body">
    <img src="img/elizabeth.png" alt="Graphic">
</div>
</div>`];

        var input = `
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>02/16</span>
                    </div>
                    <h2> Dr. Trey Ideker</h2>
                </div>
                <div class="demo-card-inner">
                    <div class="body">
                        <img src="img/FA20_chalk_talk.png" alt="Graphic">
                    </div>
                </div>
            </div>

            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>02/16</span>
                    </div>
                    <h2> Dr. Trey Ideker</h2>
                </div>
                <div class="demo-card-inner">
                    <div class="body">
                        <img src="img/FA20_chalk_talk.png" alt="Graphic">
                    </div>
                </div>
            </div>

            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>02/16</span>
                    </div>
                    <h2> Dr. Trey Ideker</h2>
                </div>
                <div class="demo-card-inner">
                    <div class="body">
                        <img src="img/FA20_chalk_talk.png" alt="Graphic">
                    </div>
                </div>
            </div>

            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>02/16</span>
                    </div>
                    <h2> Dr. Trey Ideker</h2>
                </div>
                <div class="demo-card-inner">
                    <div class="body">
                        <img src="img/FA20_chalk_talk.png" alt="Graphic">
                    </div>
                </div>
            </div>
            `;

        /*
        var output = "";
        inputs.forEach(element => output += element);
        $(target).append(output);
        */

        inputs.forEach(element => $(target).append(element));

        //$(target).append(input);

    });
}

tableUpdate("https://docs.google.com/spreadsheets/d/e/2PACX-1vQwzVDavSQaIw281Xwld-QiHyone_9L_dl5HDP9n8FSKWrRd3Bxna8IHoA0exxurQFvCiUG0611hFTc/pub?gid=0&single=true&output=csv","#timeline-target");