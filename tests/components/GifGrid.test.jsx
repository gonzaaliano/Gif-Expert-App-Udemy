import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Seinfeld';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando Gifs...'));
        expect(screen.getByText(category));

    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: "https://localhost/saitama.jpg"
            },
            {
                id: 'DEF',
                title: 'Vegeta',
                url: "https://localhost/vegeta.jpg"
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);


    })
})