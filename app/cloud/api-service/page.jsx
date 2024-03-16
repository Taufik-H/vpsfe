"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TbCloudDownload, TbCloudUpload } from "react-icons/tb";
import { adminOrders, datatable } from "@/constant";
import Image from "next/image";
import PopupWallet from "@/components/custom/PopupWallet";
import { API_URL } from "@/utils/ApiUrl";
import { VscChip } from "react-icons/vsc";

// const data = datatable;
// use useEffect to fetch data from server dont use constant like this, this is only dummy data
export const columns = [
  {
    accessorKey: "memory",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Memory
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="">
        <div className="pl-7">{row.getValue("memory")} GB</div>{" "}
      </div>
    ),
  },
  {
    accessorKey: "vcpu",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          vCPUs
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="">
        <div className="pl-6">{row.getValue("vcpu")} vCPU</div>{" "}
      </div>
    ),
  },

  {
    accessorKey: "bandwith",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bandwidth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="pl-7">{row.getValue("bandwith")} TB</div>
    ),
  },
  {
    accessorKey: "storage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Storage
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-7">{row.getValue("storage")} GB</div>,
  },
  {
    accessorKey: "connection",
    header: "Connection",
    cell: ({ row }) => {
      const statusValue = row.getValue("connection");

      return (
        <div className={`font-semibold capitalize`}>{statusValue} Gbps</div>
      );
    },
  },

  // {
  //   accessorKey: "monthPrice",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Monthly Price
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => (
  //     <div className="lowercase">${row.getValue("monthPrice")}/m</div>
  //   ),
  // },

  {
    accessorKey: "hourPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hourly Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="pl-7">${row.getValue("hourPrice")}/h</div>
    ),
  },

  {
    header: "Action",

    id: "action",
    enableHiding: false,
    cell: ({ row }) => {
      const dataaction = row.original;
      return (
        <PopupWallet
          // username={row.getValue("username")}
          passwordhost={"password"}
          idNode={dataaction.id}
          status={dataaction.status}
        />
      );
    },
  },
];

export default function ApiService() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${API_URL}/product?ctg=vps`)
      .then((res) => res.json())
      .then((datas) => {
        setData(datas);
      });
  }, []);

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <section className="px-3 sm:px-6 lg:px-12">
      <div className="mt-10 flex items-center  justify-items-center gap-7">
        <h1 className="text-lg font-bold capitalize">live Api Service nodes</h1>
        <VscChip size={25} className="mt-1 animate-pulse text-green-600" />
      </div>
      <div className="flex items-center justify-items-center   gap-7 py-3">
        <h1 className="text-sm capitalize">
          Cloudnet AI, empowered by the latest hardware resources, is the answer
          to fast performance and reliability.
        </h1>
        {/* <VscChip size={25} className="mt-1 animate-pulse text-green-600" /> */}
      </div>
      {/* content */}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
