- Read API documentation
- No depender del contrato de la API, mappear a nuestro contrato.
**## useRef**
Crear una referencia mutable que persiste durante todo el ciclo de vida del component.
Guardar cualquier valor que quieras mutar, elemento del DOM, contador, y que cada vez que cambia, **no vuelve a renderizar el componente**.

Controlar formularios (con React)
React controla que se escribe en los inputs, validaciones. Este se realize a traves del estado

**## useMemo**
Memoizar computaciones queremos evitar que se hagan a no ser que cambien las dependencias. Tambien funciona con funciones como en getMovies

**## useCallback**
Es igual al useMemo pero pensado para las funciones. Simplifica la sintaxis