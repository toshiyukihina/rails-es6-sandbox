import Hello from './hello';

jQuery($ => {
  const hello = new Hello();
  $('#content').text(hello.world());
});
