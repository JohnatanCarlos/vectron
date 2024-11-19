"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Point = {
    date: string
    status: "success" | "failed"
    start_time: string
    break_time: string
    return_time: string
    departure_time: string
    journey: string
}

export const pointColumns: ColumnDef<Point>[] = [
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "start_time",
    header: "Entrada",
  },
  {
    accessorKey: "break_time",
    header: "Pausa",
  },
  {
    accessorKey: "return_time",
    header: "Retorno",
  },
  {
    accessorKey: "departure_time",
    header: "Saída",
  },
  {
    accessorKey: "journey",
    header: "Jornada",
  },
  {
    accessorKey: "action",
    header: "Ações",
  },
]
