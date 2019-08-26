/*daterangepicker*/
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});
		 
/*tab*/
(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle('.toggle');
  });

  this.Toggle = (function() {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab");
      this.panels = this.el.find(".panel");
      this.bind();
    }

    Toggle.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle.prototype.bind = function() {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function(e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle;

  })();

}).call(this);


/*leftmenu*/
$(document).ready(function(){
    $(".dayOneMenu").hide();
  $(".dayOne").click(function(){
    $(".dayOneMenu").toggle();
  });
});

$(document).ready(function(){
    $(".dayTwoMenu").hide();
  $(".dayTwo").click(function(){
    $(".dayTwoMenu").toggle();
  });
});

$(document).ready(function(){
    $(".dayThreeMenu").hide();
  $(".dayThree").click(function(){
    $(".dayThreeMenu").toggle();
  });
});

/*tab click*/
$(document).ready(function(){
  $(".click").each(function () {
     $(this).click(function () {
        $(this).addClass("on");
		  $(this).siblings().removeClass("on");
  });
});
});