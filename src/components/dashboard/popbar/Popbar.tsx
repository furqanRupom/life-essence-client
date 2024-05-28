import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Avatar, DropdownMenu, DropdownItem, Dropdown, DropdownSection, DropdownTrigger, Listbox, ListboxItem, Divider } from "@nextui-org/react";
import { Bell } from "lucide-react";

const Popbar = () => {
    return (
        <div>
            <Popover placement="bottom-end">
                <PopoverTrigger>
                    <Button  isIconOnly className="capitalize bg-coral-50 text-coral-400">
                        <Bell size={25} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    {(titleProps) => (
                        <div className="px-1 py-2 w-full">
                            <Listbox 
                                aria-label="Actions"
                                onAction={(key) => alert(key)}

                            >
                                <ListboxItem  key="new">
                                    <div className="flex items-center space-x-2">
                                        <Avatar size="md" className="bg-coral-50 text-coral-400" />
                                        <div>
                                            <p><strong>Md Noman</strong> sent you blood request</p>
                                            <small>{new Date().getDate()} days ago</small>
                                        </div>
                                    </div>
                                </ListboxItem>
                                <ListboxItem key="copy"> <div className="flex items-center space-x-2">
                                    <Avatar size="md" className="bg-coral-50 text-coral-400" />
                                    <div>
                                        <p><strong>Jayen khen</strong> Accepted your blood donation request</p>
                                        <small>{new Date().getMinutes()} minitues ago</small>
                                    </div>

                                </div></ListboxItem>


                                <ListboxItem key="edit">
                                    <div className="flex items-center space-x-2">

                                        <Avatar size="md" className="bg-coral-50 text-coral-400" />
                                        <div>
                                            <p><strong>Shakib khan</strong> Rejected your blood request</p>
                                            <small>{new Date().getMinutes()} minitues ago</small>
                                        </div>
                                    </div>
                                </ListboxItem>
                            </Listbox>
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default Popbar;
