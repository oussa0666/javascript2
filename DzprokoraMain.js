




<!-- Quality channels start -->

$(function() {
  $('._3cEi6AJJMeEKuoZ3Ps0LDx').click(function() {
    $('.targetDiv').not('#div' + $(this).attr('target')).hide();
    $('#div' + $(this).attr('target')).toggle();
  });
    });




<!-- Embed channels start -->
	
$(function() {
  $('._3cEi6AJJMeEKuoZ3Ps0LDx').click(function() {
    $('.targetEmbed').not('#embed' + $(this).attr('target')).hide();
    $('#embed' + $(this).attr('target')).toggle();
  });
    });






$my_menu = $("div#_3krzVwodTESsJBWuAhp4OI :eq(0)").html(), $("._2VrSD8KvILGzJTS-jaC2HZ").html($my_menu);
      $("button._2HCvA2tG4kffXsO3MPRCPh").click(function() {
        $("._3krzVwodTESsJBWuAhp4OI").addClass("open"), $(".pos-t-t").fadeIn(300)
      }), $(".pos-t-t, button._1g7qC7AIleKS8bdpCtbrWR").click(function() {
        $("._3krzVwodTESsJBWuAhp4OI").removeClass("open"), $(".pos-t-t").fadeOut(200)
      });
      // new Shortcode(document.querySelector("body"),{link:function(){return 1==this.options.out?$out="target='_blank'":$out="",$html="<a  style='background:"+this.options.bg+";color:"+this.options.color+" ' class='nwbtn "+this.options.size+" "+this.options.icon+"' href="+this.options.link+" "+$out+">"+this.options.name+"</a>",$html}});
      //	new Shortcode(document.querySelector('body'), {
      //	  note: function(done) {
      //	    $html = "<div class='note'>"+this.contents+"</div>"
      //	    return $html;
      //	  }
      //	});
      //	new Shortcode(document.querySelector('body'), {
      //	  no: function(done) {
      //	    $html = "<div class='no'>"+this.contents+"</div>"
      //	    return $html;
      //	  }
      //	});




	

<!-- Toggle channels start -->
	
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i &lt; coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}	
	
	



<!-- Collapsible channels start -->

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






<!-- Change channels start -->


function createList(m3u) {
document.getElementById("login-body").hidden = true;
document.getElementById("progress-div").hidden = false;
var lines = m3u.split("\n");
var list_code = "";
//start from i=1 to avoid first line of M3U (#EXTM3U)
//increment of 2 to jump to next channel
var i = 1;
(function loop() {
var field = lines[i].split(",");
var name = field[field.length-1]; name = name.slice(0, name.length-1);
var link = lines[i+1]; link = link.slice(0, link.length-1);
var disabled = ""; if (name.slice(0,1) === "-" || name.slice(0,1) === "=") { disabled = "disabled"; }
document.getElementById("progress").style.width = Math.floor(i*100/lines.length) + "%";
//document.getElementById("progress").innerHTML = (i+1)/2 + "/" + (lines.length-1)/2;
list_code += '<div class="_3cEi6AJJMeEKuoZ3Ps0LDx _3ienxO4W1Kx7rgXvIO_79t" ' + disabled + ' onclick="changeChannel(\'' + name.replace("'", " ") + '\',\'' + link.replace(".ts", ".m3u8") + '\')">' + name + '>';
//counter increment and exit condition
i = i + 2;
if (i < lines.length-1) {
setTimeout(loop, 0);
} else {
//code post-loop
$('#loginModal').modal('hide');
document.getElementById("list").innerHTML = list_code;
}
})();
}
function changeChannel(name, link) {
player.configure({
source: link,
autoPlay: true
});
document.getElementById("channelName").innerHTML = name;
}



<!-- Scrollable channels start -->

$(document).ready(function () {
    $('#ScrollDown').click(function () {
        $('.gwu9EtJa3I6ff7oLD97Ty').animate({
            scrollTop: '+=100'
        }, 100);
    });
});




$(document).ready(function () {
    $('#ScrollUp').click(function () {
        $('.gwu9EtJa3I6ff7oLD97Ty').animate({
            scrollTop: '-=100'
        }, 100);
    });
});


<!-- Scroll to Player onclick on channels start -->
function myFunction() {
  var elmnt = document.getElementById("playeronline");
  elmnt.scrollIntoView();
}
