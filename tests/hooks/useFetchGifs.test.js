import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook de useFetchGifs', () => {
    test('Debe regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Seinfeld'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook(() => useFetchGifs('Seinfeld'));
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),

        );
        
        
        const { images, isLoading } = result.current;
    
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
});