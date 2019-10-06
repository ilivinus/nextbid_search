import { debounce } from '../debounce';

describe("#debounce",()=>{
    
    beforeEach(()=>{
        jest.useFakeTimers();
    })

    it("Should call a certain number of expected times",()=>{
        const apiCallfn = jest.fn();
        const delay = 1000;
        
        const debounceEffect = debounce(apiCallfn, delay);
        debounceEffect();

        expect(apiCallfn).toHaveBeenCalledTimes(0);

        for(let i = 0; i < 10; i++){
            jest.advanceTimersByTime(500);
            debounceEffect();
        }
        expect(apiCallfn).toHaveBeenCalledTimes(0);
        
        jest.advanceTimersByTime(1000);
        expect(apiCallfn).toHaveBeenCalledTimes(1);
    })
})