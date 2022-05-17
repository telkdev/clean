import { computed, reactive } from "vue";

import { useJwtToken } from "@/services/jwtTokenAdapter";

const { getToken } = useJwtToken();

export function useUserStore() {
  // State
  const userState = reactive({
    email: "",
  });

  // Getters
  const isAuthenticated = computed(() => {
    return !!getToken();
  });

  // Mutations
  // function setUserData(userData) {
  //   this.userState = { ...userData };
  // }

  return { userState,  isAuthenticated: isAuthenticated.value };
}
