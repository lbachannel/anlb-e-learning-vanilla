const _clearInput = (input, clearBtn) => {
    input.value = '';
    clearBtn.style.display = 'none';
    input.focus();
}


const SearchItem = () => {
    const form = document.createElement('form');
    form.className = 'header__form';

    const icon = document.createElement('img');
    icon.src = 'search.svg';
    icon.className = 'header__input-icon';
    
    const input = document.createElement('input');
    input.placeholder = 'Search here...';
    input.className = 'header__input';
    input.name = '';

    const clearBtn = document.createElement('span');
    clearBtn.className = 'header__input-clear-btn';
    clearBtn.innerText = '✖';
    clearBtn.style.display = 'none';

    form.append(icon, input, clearBtn);

    input.oninput = (event) => {
        if (event.target.value) {
            clearBtn.style.display = 'inline';
        } else {
            clearBtn.style.display = 'none';
        }
    }

    clearBtn.onclick = () => {
        _clearInput(input, clearBtn);
    }

    return form;
}

export default SearchItem;