// =============================================
// wow animation，在網頁完整載入style.css之前，所有class name .wow 都顯示opacity0
// inside course filter
// =============================================


// =============================================
// wow animation，在網頁完整載入style.css之前，所有class name .wow 都顯示opacity0
// =============================================
// 等待所有資源載入完成後，移除臨時的 .wow 樣式
window.addEventListener('load', function() {
  // 這裡可以選擇移除 inline style 或更改其樣式
  var wowElements = document.querySelectorAll('.wow');
  wowElements.forEach(function(element) {
      element.style.opacity = '1'; // 在 CSS 加載後將透明度設置為 1
  });
});


// =============================================
// inside course filter
// =============================================
$(document).ready(function() {
  // 下拉選單展開/收起功能
  $('.inside-filter-wrap .selector-wrap .selected').on('click', function(e) {
    e.preventDefault();
    // 先關閉其他所有下拉選單
    $('.items-wrap').not($(this).siblings('.items-wrap')).slideUp(300);
    // 再切換當前點擊的下拉選單
    $(this).siblings('.items-wrap').slideToggle(300);
  });

  // 點擊其他地方時收起選單
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.selector-wrap').length) {
      $('.items-wrap').slideUp(300);
    }
  });
});