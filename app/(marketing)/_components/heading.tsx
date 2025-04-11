"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Mootion, the perfect notes application. Welcome to{" "}
        <span className="underline">Mootion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-xl font-medium">
        Mootion is the best workspace <br />
        faster work just happens
      </h3>
      <Button>
        Enter Mootion
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  );
};

export default Heading;
