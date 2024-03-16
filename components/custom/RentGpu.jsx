"use client";
import React, { useEffect, useState } from "react";
import { VscChip } from "react-icons/vsc";
import CardGpu from "./CardGpu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { API_URL } from "@/utils/ApiUrl";

const RentGpu = ({ tabs, query, name }) => {
  const [gpuNodes, setGpunodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `${API_URL}/product?${query}`;

  useEffect(() => {
    setLoading(true);
    let finalUrl = API_URL;
    if (query) {
      finalUrl += `/product?${query}`;
    } else {
      finalUrl += "/product";
    }

    fetch(finalUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        setLoading(false);
        setGpunodes(data);
      });
  }, []);

  return (
    <section className="px-3 sm:px-6 lg:px-12">
      <div className="mt-10 flex items-center  justify-items-center gap-7">
        <h1 className="text-lg font-bold capitalize">live GPU {name} nodes</h1>
        <VscChip size={25} className="mt-1 animate-pulse text-green-600" />
      </div>
      {tabs ? (
        <Tabs defaultValue="All" className="mb-4">
          <TabsList className="my-4">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="80GB">80GB</TabsTrigger>
            <TabsTrigger value="40GB">40GB</TabsTrigger>
            <TabsTrigger value="24GB">24GB</TabsTrigger>
            <TabsTrigger value="16GB">16GB</TabsTrigger>
            <TabsTrigger value="15GB">15GB</TabsTrigger>
            <TabsTrigger value="12GB">12GB</TabsTrigger>
            <TabsTrigger value="8GB">8GB</TabsTrigger>
          </TabsList>
          <TabsContent
            value="All"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes.map((gpuNode, index) => (
              <CardGpu
                key={"All" + gpuNode.cpuName + gpuNode.gpuName + index}
                {...gpuNode}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="80GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 80)
              .map((gpuNode) => (
                <CardGpu
                  key={"80GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="40GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 40)
              .map((gpuNode) => (
                <CardGpu
                  key={"40GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="24GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 24)
              .map((gpuNode) => (
                <CardGpu
                  key={"24GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="16GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 16)
              .map((gpuNode) => (
                <CardGpu
                  key={"16GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="15GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 15)
              .map((gpuNode) => (
                <CardGpu
                  key={"15GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="12GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 12)
              .map((gpuNode) => (
                <CardGpu
                  key={"12GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
          <TabsContent
            value="8GB"
            className="mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {gpuNodes
              .filter((gpuNode) => gpuNode.gpu == 8)
              .map((gpuNode) => (
                <CardGpu
                  key={"8GB" + gpuNode.cpuName + gpuNode.gpuName}
                  {...gpuNode}
                />
              ))}
          </TabsContent>
        </Tabs>
      ) : (
        <div
          value="All"
          className="mt-5 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {gpuNodes.map((gpuNode, index) => (
            <CardGpu
              key={"All" + gpuNode.cpuName + gpuNode.gpuName + index}
              {...gpuNode}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RentGpu;
