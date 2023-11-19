import { inject } from "vue";
import { celementKey } from "@/utils/private/symbols";

export default function useCElement () {
    return inject(celementKey)
}