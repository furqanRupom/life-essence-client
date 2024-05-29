import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type ISize = "sm" | "md" | "lg"
type IRoutes = {
    routes: string[]
}
const  BreadcrumbsTitle:React.FunctionComponent<IRoutes> = ({routes}) =>  {

    return (
        <div className="flex flex-col flex-wrap gap-4">
          
                <Breadcrumbs  size="lg">
                   {
                        routes.map((route) => <BreadcrumbItem>{route}</BreadcrumbItem>)
                   }
               
                </Breadcrumbs>
        </div>
    );
}

export default BreadcrumbsTitle
