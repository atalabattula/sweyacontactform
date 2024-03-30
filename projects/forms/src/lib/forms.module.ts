import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { FormsComponent } from "./forms.component";
import { ContactformComponent } from "./contactform/contactform.component";
import { LabelComponent } from "./label/label.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        InputComponent, 
        FormsComponent, 
        ContactformComponent, 
        LabelComponent
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule
    ],
    exports: [
        InputComponent, 
        FormsComponent, 
        ContactformComponent, 
        LabelComponent
    ]
})
export class FormsModule{}