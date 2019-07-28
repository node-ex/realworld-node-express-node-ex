import express from 'express';

const router = express.Router();

const formHtml =
`<form
  method="post"
  action="/"
  target="dummyIframe"
>
  <input
    type="hidden"
    name="hiddenParam"
    value="Hidden value"
  >
  <input
    type="text"
    name="textParam"
    value="Some text"
  >
  <button
    type="submit"
  >
    Submit
  </button>
</form>

<!-- Dummy iframe to display empty response to a POST request -->
<iframe
  name="dummyIframe"
  style="display:none; position:absolute; z-index:-100;"
>
</iframe>`;

router.route('/')
  .get((_request, response, _next) => {
    response.send(formHtml);
  })
  .post((request, response, _next) => {
    console.log(request.body);
    response
      .status(200)
      .send();
  });

export default router;
