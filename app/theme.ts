/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

export const theme = extendTheme({

    fonts: {
     fontRoboto: 'var(--font-roboto)',
     fontRubik: 'var(--font-rubik)',
     fontPoppins: 'var(--font-poppins)',
     fontInter: 'var(--font-inter)',
    }
});