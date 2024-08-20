import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";
import * as PopoverPrimitive from '@radix-ui/react-popover'

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = forwardRef<ElementRef<typeof PopoverPrimitive.Content>, ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(
    ({ children, ...props }, ref) => (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content  {...props} ref={ref}>
                {children}
            </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
    )
);