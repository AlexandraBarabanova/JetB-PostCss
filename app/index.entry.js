import 'reset-css';
import './exterrnal-libs/layout/index.css'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.css";

document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('#unity').onclick = function() {
    //     console.log('gfj');
    // }
    // document.getElementsByClassName('text-unity')[0].style.display = document.querySelectorAll('#unity:hover').length?'block':'none';
});
var unity = document.getElementsByClassName('text-unity');
var unreal = document.getElementsByClassName('text-unreal');
var mobile = document.getElementsByClassName('text-mobile');
var casual = document.getElementsByClassName('text-casual');
var def = document.getElementsByClassName('text-default');
var imgAfter = document.getElementsByClassName('img-absol-after');

window.onload = function () {
    document.addEventListener("click", function (e) {
        unity[0].style.display =
            unreal[0].style.display =
                mobile[0].style.display =
                    def[0].style.display =
                        casual[0].style.display = 'none';
        imgAfter[0].classList.remove("show");
        if(e.target.closest('#unity')){
            unity[0].style.display = 'block';
        } else if (e.target.closest('#unreal')) {
            unreal[0].style.display = 'block';
            imgAfter[0].classList.add("show")
        } else if (e.target.closest('#mobile')) {
            mobile[0].style.display = 'block';
        } else if (e.target.closest('#casual')) {
            casual[0].style.display = 'block';
        } else { def[0].style.display = 'block'}
    })
}
