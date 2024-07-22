function winsize() {
    winW = $(window).width();
}
$(window).resize(function () {
    document.location.reload();
    winsize();
});
winW = $(window).width();
if (winW > 960) {

    const content = "오랜 비밀로 덮여있던 항아리가 인간의 탐욕으로 봉인해제 되었다. 하지만 탐욕에는 책임이 따르는 법...  위기에 처한 지구를 구하기 위한 여정이 시작되었다."
    const Brandtext = document.querySelector(".Brandtext")
    let index = 0;

    function sleep(delay) {
        const start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    function typing() {
        Brandtext.textContent += content[index++];
        if (index > content.length) {
            Brandtext.textContent = ""
            index = 0;
            sleep(3000);
        }
    }
    setInterval(typing, 100)
}