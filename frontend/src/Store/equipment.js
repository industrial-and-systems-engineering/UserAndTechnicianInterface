import { create } from "zustand";

export const useEquipmentStore = create((set) => ({
    Equipment:[],    
    setEquipment: (Equipment) => set({Equipment}),
    CreateEquipmentRequest: async (newEquipment) => {
        if(!newEquipment.name || !newEquipment.description){
            return { success: false, message: "Please fill all the fields" };
        }
        try {
            const res = await fetch("/api/user/newEquipment", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(newEquipment),
        });
        if (!res.ok) {
        const errorData = await res.json();
            return {
                success: false,
                message: errorData.message || "Failed to add request",
            };
        }
        const data = await res.json();
        set((state) => ({ Equipment: [...state.Equipment, data.data] }));
        return { success: true, message: "Equipment added successfully" };
        } catch (error) {
            return { success: false, message: error.message || "An error occurred" };
        }
    },
    fetchPendingRequest: async () =>{
        const res = await fetch("api/user/equipment")
        const data = await res.json();
        set({Equipment: data.data});
    },
    UpdateEquipmentDetails: async (pid, CalibrationResult) => {
    const res = await fetch(`api/technician/updateEquipment/${pid}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(CalibrationResult),
    });
    const data = await res.json();
    if (!data.success) {
        return { success: false, message: data.message || "Failed to update" };
    }
    set((state) => ({
        Equipment: state.Equipment.map((product) =>
        product._id === pid ? data.data : product
        ),
    }))
    return { success: true, message: "Product updated successfully" };
    },    
}))

