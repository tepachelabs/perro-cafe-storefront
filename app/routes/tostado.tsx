import {redirect} from '@remix-run/router';

const TARGET_URL =
  'https://tienda.perro.cafe/collections/tienda-pagina-inicial';

export const loader = () => {
  return redirect(TARGET_URL, {status: 301});
};

export default function Tostado() {
  return null;
}
