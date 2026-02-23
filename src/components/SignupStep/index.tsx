interface SignupStepInterface {
    steps: number[];
    currentStep: number;
}

export default function SignupStep(props: SignupStepInterface){


    return(
        <div className="flex items-center">
            {props.steps.map((step, i)=>(
                <Step key={i} step={step} isActive={step <= props.currentStep} />
            ))}
        </div>
    )
}

interface StepInterface {
    step: number;
    isActive: boolean;
}

function Step(props: StepInterface){
    return(
        <div className="flex items-center">
            {props.step > 1  && <div className={`h-[3px] w-[113px] ${props.isActive ? "bg-primary-orange" : "bg-[#ADADAD]"}`} />}
            <div className={`w-[40px] h-[40px] rounded-full ${props.isActive ? "bg-primary-orange text-white" : "border-2 text-[#ADADAD] border-[#ADADAD]"} flex justify-center items-center`}>
                {props.step}
            </div>
        </div>
    )
}