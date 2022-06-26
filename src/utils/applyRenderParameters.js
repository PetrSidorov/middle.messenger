import Templator from './Templator';

export function applyRenderParameters(template, context) {
  const tmpl = new Templator(template);
  const renderedTemplate = tmpl.compile(context);
  root.innerHTML = renderedTemplate;
}
