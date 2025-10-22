# Guía de Contribución  

¡Gracias por tu interés en contribuir a este proyecto! A continuación, se describen las pautas para colaborar de manera efectiva.  

---

## **Cómo Contribuir**

1. **Revisar Issues Abiertos**  
   - Consulta la sección de [Issues](https://github.com/Vazz2004/back-end-anvic/issues) para ver tareas pendientes, errores o mejoras sugeridas.  

2. **Reportar un Bug o Sugerir una Función**  
   - Abre un nuevo issue describiendo el problema o la idea de mejora.  
   - Proporciona la mayor cantidad de detalles posibles.  

3. **Iniciar Localmente**

    Clona el proyecto

    ```bash
      git clone https://github.com/Vazz2004/back-end-anvic.git
    ```

    Ve al directorio del proyecto

    ```bash
      cd back-end-anvic
    ```

    Instala las dependencias

    ```bash
      npm install
      pnpm install
    ```

    Crea tu propia rama de desarrollo

    ```bash
      git switch -c 
        fix/nombre_de_rama
        feat/nombre_de_rama
        chore/nombre_de_rama
    ```

    Inicia el servidor

    ```bash
      npm run dev
      pnpm dev
    ```

    **Variables de Entorno**

      Para iniciar este projecto de manera correcta tendras que añadir las siguientes variables de entorno a tu archivo .env

      ```bash
        DB_HOST
        DB_USER
        DB_PASSWORD
        DB_NAME
        DB_PORT
        JWT_SECRET
      ```

    Asegúrate de seguir las convenciones de código del proyecto.  

4. **Enviar un Pull Request (PR)**

  Revisa la sección de **Cómo Enviar un Pull Request** a continuación para asegurarte de cumplir con los lineamientos.  

---

## **Cómo Enviar un Pull Request**  

  1. **Título del Pull Request**  
    Proporciona un título breve y descriptivo que resuma el propósito del cambio.  

  2. **Descripción**  
    Asegúrate de incluir:  
    - Una breve explicación del problema que resuelve o la funcionalidad que añade.  
    - Enlaces a los issues relacionados (si corresponde).  

  3. **Formato del Pull Request**  
    Utiliza el siguiente formato al crear tu PR:

      ``` markdown
      ### **Título del Pull Request**
      _Escribe un título conciso y descriptivo que resuma el cambio (por ejemplo, "Corrección del error en el tiempo de espera del inicio de sesión")._
      ---
      ### **Descripción**
      Proporciona un resumen breve de los cambios en este PR:
      - ¿Qué problema soluciona o qué funcionalidad añade?
      - ¿Por qué es necesario este cambio?
      **Ejemplo:**
      > Este PR resuelve el issue #123 añadiendo validación de entrada en el formulario de inicio de sesión. Esto asegura que los usuarios reciban mensajes de error claros cuando las credenciales son inválidas.
      ---
      ### **Tipo de Cambio**
        Marca el tipo o tipos de cambio que corresponda(n):
        -   🐛 Corrección de errores (bug fix)
        -   ✨ Nueva funcionalidad
        -   ⚙️ Refactorización (cambio no disruptivo en el código)
        -   📄 Actualización de documentación
        -   🚀 Mejora de rendimiento
        -   🔥 Cambio disruptivo (breaking change)
      ---
      ### **¿Cómo se ha probado?**
      Explica cómo probaste los cambios y cuáles fueron los resultados:
        -   Pruebas unitarias
        -   Pruebas de integración
        -   Pruebas manuales
        -   Otras (especificar):
      **Ejemplo:**
        - Se probó la validación del formulario de inicio de sesión con entradas válidas e inválidas.
        - Se verificó que los mensajes de error aparezcan correctamente.
      ---
      ### **Lista de Verificación**
      Asegúrate de que tu contribución cumpla con los siguientes criterios:
        -   El código sigue la guía de estilo del proyecto.
        -   Los cambios están documentados.
        -   Se escribieron pruebas y pasan correctamente.
        -   Los issues relevantes están enlazados en el PR.
        -   El código está listo para revisión.
      ---
      ### **Issues Relacionados**
      Enlaza cualquier issue o tarea relacionada:
        -   Cierra #[número_de_issue]
        -   Relacionado con #[número_de_issue]
      ---
      ### **Capturas de Pantalla (si aplica)**
      Incluye capturas de pantalla o GIFs que muestren visualmente el impacto de los cambios.

  4. **Pruebas y Validaciones**

      Asegúrate de que todo funcione correctamente antes de enviar el PR.
      Escribe pruebas unitarias o de integración si es necesario.
  5. **Feedback**

      Responde rápidamente a los comentarios de los revisores.

---

## **Convenciones de Código**

- Sigue el estilo de codificación del proyecto.
- Usa nombres descriptivos para funciones, variables y commits.

---

## **Código de Conducta**

Sigue nuestro Código de Conducta para garantizar una comunidad respetuosa y colaborativa.

---
¡Gracias por contribuir! 🎉
