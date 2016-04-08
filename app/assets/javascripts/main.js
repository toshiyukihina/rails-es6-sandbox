import Hello from './hello';

jQuery($ => {
  let hello = new Hello();
  $('#content').text(hello.world());
});
