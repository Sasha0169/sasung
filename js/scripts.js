function viewMenuNavigation()
{
    document.getElementsByClassName('transparent-background-with-navigation-menu')[0].style.display='flex';
    document.body.style.overflow = 'hidden';
};

function closeMenuNavigation()
{
    document.getElementsByClassName('transparent-background-with-navigation-menu')[0].style.display ='none';
    document.body.style.overflow = 'scroll';
}

function viewAndCloseListNavigationInFooter2()
{
    let element = document.getElementsByClassName('navigation-list2')[0];
    let arrow = element.parentNode.querySelector('.footer__title-and-arrow .footer__arrow');
    if (element.style.display == 'none')
    {
        element.style.display='flex'
        arrow.style.transform = "rotate(90deg)";
    }
    else
    {
        element.style.display='none'
        arrow.style.transform = "rotate(0deg)";
    }
};

function viewAndCloseContactListInFooter()
{
    let element = document.getElementsByClassName('footer__contacts')[0];
    let arrow = element.parentNode.querySelector('.footer__title-and-arrow .footer__arrow');
    if (element.style.display == 'none')
    {
        element.style.display='flex'
        arrow.style.transform = "rotate(90deg)";
    }
    else
    {
        element.style.display='none'
        arrow.style.transform = "rotate(0deg)";
    }
}

let open_panel;
let interaction_container;
let descendants_of_objects = ["navigation-panel__column", "navigation-panel__title", "navigation-panel__option", "navigation-panel__wrap-for-content", "categories-navigation__link"];
let elements = document.getElementsByClassName('categories-navigation__option');
let panels = document.getElementsByClassName('navigation-panel');
for(let i = 0, a = 0; i<elements.length; i++)
{
    if(i==2)
    continue;
    elements[i].onmouseover= open_navigation_panel;
    elements[i].panel_for_open = panels[a];
    elements[i].onmouseout = close_navigation_panel;
    elements[i].panel_for_open.onmouseout = close_navigation_panel;
    a++;
}

function open_navigation_panel(event)
{
    if(open_panel!=undefined)
        if(open_panel != event.currentTarget.panel_for_open)
        {
            for(let i = 0; i<panels.length; i++)
            {
                panels[i].style.display = "none";
            }
        }
    event.currentTarget.panel_for_open.style.display = "flex";
    open_panel = event.currentTarget.panel_for_open;
    interaction_container = event.currentTarget;
}

function close_navigation_panel(event)
{
    let isAnotherObject=true;
    let relatedTarget = event.relatedTarget;
    if(relatedTarget==null||open_panel==undefined)
    return;
    for(let a of descendants_of_objects)
    {
        if (relatedTarget.className == a)
        {
            isAnotherObject = false;
            return;
        }
    }

    if(relatedTarget==open_panel||relatedTarget==interaction_container)
    {
        isAnotherObject = false;
    }

    if(isAnotherObject)
        open_panel.style.display = "none";
}

let var1= document.getElementsByClassName('option-radio-button')[0];
var1.radio_button=var1.getElementsByClassName("option-radio-button__radio-button")[0];
let var2= document.getElementsByClassName('option-radio-button')[1];
var2.radio_button=var2.getElementsByClassName("option-radio-button__radio-button")[0];

var1.onclick = click_on_radiobutton;
var2.onclick = click_on_radiobutton;
function click_on_radiobutton(event)
{
    event.currentTarget.radio_button.checked = true;
}
