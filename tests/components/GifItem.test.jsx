const { render, screen } = require("@testing-library/react");
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en componente <GifItem />', () => {

    const title = 'Seinfeld';
    const url = 'https://seinfeld.com/jerry.jpg';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // console.log(screen.getByRole('img').src).toBe(url);
        // console.log(screen.getByRole('img').alt).toBe(title);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('Debe mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })
})