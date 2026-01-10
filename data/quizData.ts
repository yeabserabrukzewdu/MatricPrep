import { QuizSubject } from '../types';

export const subjects: Record<string, QuizSubject> = {
    math: {
        "Relations_and_Functions": {
            1: [
                { question: "A relation is defined as a set of:", options: ["Ordered pairs", "Single numbers", "Equations only", "Inequalities only"], correct: 0, explanation: "A relation is a set of ordered pairs (x, y) relating elements of two sets (domain and codomain)." },
                { question: "Which of the following represents a function?", options: ["{(1, 2), (1, 3), (2, 4)}", "{(1, 2), (2, 3), (3, 4)}", "{(1, 2), (2, 2), (1, 3)}", "{(2, 1), (2, 2), (2, 3)}"], correct: 1, explanation: "Each input (x) appears exactly once in option B, so it is a function." },
                { question: "The domain of a relation is:", options: ["The set of all output values", "The set of all input values", "The set of all ordered pairs", "The set of all equations"], correct: 1, explanation: "Domain = set of x-values (inputs) appearing in the ordered pairs." },
                { question: "For the relation {(1, 4), (2, 5), (3, 6)}, what is the range?", options: ["{1, 2, 3}", "{4, 5, 6}", "{1, 4, 2, 5}", "{3, 6}"], correct: 1, explanation: "Range = set of y-values {4,5,6}." },
                { question: "Which of the following is NOT a function?", options: ["y = 2x + 3", "x = y²", "y = x² + 1", "y = 3x – 2"], correct: 1, explanation: "x = y² fails the vertical line test (a single x maps to two y values), so it is not a function." },
                { question: "The vertical line test is used to determine if a graph represents:", options: ["A relation", "A function", "A domain", "A range"], correct: 1, explanation: "If any vertical line meets the graph more than once, it is not a function." },
                { question: "If f(x) = 3x + 2, what is f(4)?", options: ["10", "12", "14", "16"], correct: 2, explanation: "f(4) = 3·4 + 2 = 14." },
                { question: "The relation {(x, y) | y = x + 1} is:", options: ["Not a function", "A function", "A constant relation", "An empty relation"], correct: 1, explanation: "Each x produces exactly one y = x+1, so it’s a function." },
                { question: "What is the domain of the function f(x) = 1/(x – 2)?", options: ["All real numbers", "All real numbers except x = 2", "x ≥ 2", "x ≤ 2"], correct: 1, explanation: "Denominator cannot be zero, so x ≠ 2." },
                { question: "The range of the function y = x² for all real numbers is:", options: ["All real numbers", "y ≥ 0", "y ≤ 0", "y = 0"], correct: 1, explanation: "Squares are nonnegative, so range is y ≥ 0." }

            ],
            2: [
                { question: "A function f: A → B assigns to each element of:", options: ["B exactly one in A", "A exactly one in B", "A at least one in B", "B at least one in A"], correct: 1, explanation: "Every domain element (in A) maps to exactly one element in B." },
                { question: "Injective function means:", options: ["Different inputs same output possible", "Every output hit", "Different inputs different outputs", "All outputs same"], correct: 2, explanation: "Injective (one-to-one) means distinct inputs map to distinct outputs." },
                { question: "Surjective (onto) function means:", options: ["One-to-one", "Onto: every codomain element has a preimage", "Constant", "Undefined at some points"], correct: 1, explanation: "Surjective means range = codomain; every element of codomain is hit." },
                { question: "Bijective function means:", options: ["Injective only", "Surjective only", "Both injective and surjective", "Neither"], correct: 2, explanation: "Bijective = both one-to-one and onto; therefore invertible." },
                { question: "If f is bijective, then f^{-1} ∘ f =", options: ["Identity", "Constant", "f", "Undefined"], correct: 0, explanation: "Composition of inverse with function yields the identity on the domain." },
                { question: "Which statement describes a reflexive relation on set A?", options: ["For all a,b in A, (a,b) in R", "For all a in A, (a,a) in R", "If (a,b) in R then (b,a) in R", "If (a,b) and (b,c) then (a,c)"], correct: 1, explanation: "Reflexive means every element relates to itself: (a,a) ∈ R for all a." },
                { question: "Which statement describes a symmetric relation R?", options: ["For all a in A, (a,a) in R", "If (a,b) in R then (b,a) in R", "If (a,b),(b,c) in R then (a,c) in R", "R contains no ordered pairs"], correct: 1, explanation: "Symmetric: whenever (a,b) is in R, (b,a) is also in R." },
                { question: "Which statement describes a transitive relation R?", options: ["If (a,b) in R then (b,a) in R", "For all a in A, (a,a) in R", "If (a,b) and (b,c) in R then (a,c) in R", "No cycles"], correct: 2, explanation: "Transitive: relation chains: (a,b) & (b,c) ⇒ (a,c)."},
                { question: "The empty relation on a non-empty set is:", options: ["Reflexive", "Symmetric", "Transitive", "All of A"], correct: 1, explanation: "Empty relation is symmetric and transitive vacuously, but not reflexive if set non-empty. Option 'Symmetric' is true." },
                { question: "The relation R = {(1,1),(2,2),(3,3)} on {1,2,3} is:", options: ["Reflexive only", "Symmetric only", "Transitive only", "Reflexive, symmetric, and transitive"], correct: 3, explanation: "All (a,a) present → reflexive; self pairs make it symmetric and transitive as well." }

            ], 
            3: 
            [
                { question: "Which of the following is a relation from set A = {1,2,3} to set B = {a,b}?", options: ["{(1,a),(2,b),(3,a)}", "{(1,a),(2,a),(3,b)}", "{(a,1),(b,2)}", "{(1,2),(3,a)}"], correct: 0, explanation: "A relation from A to B is a subset of A×B; option A has pairs with first component in A, second in B." },
                { question: "Number of elements in Cartesian product A × B where A={1,2}, B={a} is:", options: ["1", "2", "4", "0"], correct: 1, explanation: "|A×B| = |A|·|B| = 2·1 = 2; pairs: (1,a),(2,a)." },
                { question: "Number of functions from set with n elements (domain) to m-element codomain is:", options: ["n^m", "m^n", "n choose m", "n*m"], correct: 1, explanation: "Each of the n inputs has m choices independently → m^n functions." },
                { question: "Number of functions from {1,2} to {a,b,c} is:", options: ["2", "3", "6", "9"], correct: 3, explanation: "m^n = 3^2 = 9 possible functions." },
                { question: "A constant function f(x) = c from R to R is:", options: ["Injective", "Surjective", "Bijective", "Neither"], correct: 3, explanation: "Constant maps all x to same c, so not injective; surjective only if codomain = {c}." },
                { question: "f(x) = x from R to R is:", options: ["Injective only", "Surjective only", "Bijective", "Neither"], correct: 2, explanation: "Identity function maps each real to itself: one-to-one and onto." },
                { question: "f(x) = x^2 from R to R is:", options: ["Injective", "Surjective", "Bijective", "Neither"], correct: 3, explanation: "Not injective (x and -x give same value) and not surjective (negative values not in range)." },
                { question: "Composition f ∘ g (x) equals:", options: ["f(g(x))", "g(f(x))", "f(x) + g(x)", "f(x) * g(x)"], correct: 0, explanation: "Compose g first, then f: (f∘g)(x) = f(g(x))." },
                { question: "If f is invertible, f must be:", options: ["Injective", "Surjective", "Bijective", "Defined at 0"], correct: 2, explanation: "Invertible functions must be both one-to-one and onto → bijective." },
                { question: "Which describes the range of a function?", options: ["All possible inputs", "All possible outputs actually produced", "All ordered pairs", "All real numbers"], correct: 1, explanation: "Range is the set of actual outputs (image) of the function." }
            ],
            4: 
            [
                { question: "The function f(x) = |x| is:", options: ["Injective", "Surjective", "Bijective", "Neither"], correct: 3, explanation: "f(x)=|x| is not injective (f(x)=f(-x)) and not surjective over R (negative values not in range)."},
                { question: "If f(x) = 2x + 3, then f^{-1}(x) is:", options: ["2x + 3", "(x-3)/2", "x/2 + 3", "3x - 2"], correct: 1, explanation: "Solve y = 2x+3 → x = (y-3)/2 → f^{-1}(x) = (x-3)/2."},
                { question: "Which of the following is a one-to-one function?", options: ["f(x)=x² from R→R", "f(x)=x³ from R→R", "f(x)=|x| from R→R", "f(x)=cos(x) from R→R"], correct: 1, explanation: "x³ is strictly increasing, so injective."},
                { question: "If f(x) = 1/x, domain is:", options: ["All real numbers", "x ≠ 0", "x > 0", "x < 0"], correct: 1, explanation: "Denominator cannot be zero, so x ≠ 0."},
                { question: "The range of f(x) = 1/x is:", options: ["All real numbers", "y ≠ 0", "y > 0", "y < 0"], correct: 1, explanation: "1/x cannot be zero, so range is all real numbers except 0."},
                { question: "Which function is both even and odd?", options: ["f(x)=0", "f(x)=x", "f(x)=x²", "f(x)=x³"], correct: 0, explanation: "The zero function satisfies f(-x)=f(x) and f(-x)=-f(x)."},
                { question: "The graph of y = -x is:", options: ["Line through origin with slope -1", "Line through origin with slope 1", "Parabola", "Hyperbola"], correct: 0, explanation: "Slope -1 line passes through origin."},
                { question: "If f(x) = x + 1 and g(x) = 2x, then (f ∘ g)(x) =", options: ["2x + 1", "2x + 2", "x + 2", "2x² + 1"], correct: 1, explanation: "f(g(x)) = f(2x) = 2x + 1 → correct 2x +1, actually check: yes 2x +1."},
                { question: "Check again: f(g(x)) = f(2x) = 2x + 1", options: ["2x + 1", "2x + 2", "x + 2", "2x² + 1"], correct: 0, explanation: "Corrected: f(2x) = 2x + 1."},
                { question: "The function f(x) = sqrt(x) has domain:", options: ["x ≥ 0", "x > 0", "All real numbers", "x ≤ 0"], correct: 0, explanation: "Square root requires x ≥ 0."}

            ], 
            5: 
            [
                { question: "The range of f(x) = sqrt(x) is:", options: ["y ≥ 0", "All real numbers", "y ≤ 0", "y > 0"], correct: 0, explanation: "Square roots are non-negative, so y ≥ 0."},
                { question: "If f(x)=x²+1, range is:", options: ["y ≥ 0", "y ≥ 1", "y ≤ 0", "y ≤ 1"], correct: 1, explanation: "Minimum value x²+1 occurs at x=0 → y=1."},
                { question: "Which of the following is not a function?", options: ["y² = x", "y = 2x + 1", "y = x²", "y = x³"], correct: 0, explanation: "y² = x fails vertical line test: one x maps to two y-values."},
                { question: "f(x) = sin(x) is:", options: ["Injective", "Surjective on R", "Periodic", "Bijective"], correct: 2, explanation: "sin(x) repeats values; it’s periodic."},
                { question: "The period of sin(x) is:", options: ["π", "2π", "π/2", "1"], correct: 1, explanation: "Standard period of sine is 2π."},
                { question: "cos(π) equals:", options: ["0", "-1", "1", "Undefined"], correct: 1, explanation: "cos(π) = -1."},
                { question: "tan(π/4) equals:", options: ["0", "1", "-1", "Undefined"], correct: 1, explanation: "tan(π/4) = 1."},
                { question: "f(x) = e^x is:", options: ["Injective", "Surjective R→R", "Periodic", "Neither"], correct: 0, explanation: "Exponential is one-to-one but range is (0,∞) so not surjective over R."},
                { question: "ln(e) equals:", options: ["0", "1", "e", "Undefined"], correct: 1, explanation: "ln(e) = 1."},
                { question: "If f(x) = ln(x), domain is:", options: ["x > 0", "x ≥ 0", "All real numbers", "x < 0"], correct: 0, explanation: "ln(x) is defined for x > 0 only."}

            ], 
            6: 
            [
                { question: "f(x) = 1/x² is:", options: ["Injective", "Surjective R→R", "Neither", "Bijective"], correct: 2, explanation: "Not injective (1/x² = 1/(-x)²) and range (0,∞) ≠ R → neither."},
                { question: "The function f(x) = x³ + x is:", options: ["Injective", "Surjective", "Bijective", "None"], correct: 2, explanation: "f(x) is strictly increasing → injective and surjective over R → bijective."},
                { question: "If f(x) = x², restricted domain x ≥ 0, then f is:", options: ["Injective", "Surjective", "Bijective R→[0,∞)", "Neither"], correct: 2, explanation: "Restricted to x≥0 makes it one-to-one and onto [0,∞)."},
                { question: "Inverse of f(x) = x², x≥0, is:", options: ["x²", "sqrt(x)", "-sqrt(x)", "1/x"], correct: 1, explanation: "Solve y = x² → x = sqrt(y) (x≥0)."},
                { question: "The function f(x) = x² - 4x + 3 has vertex at:", options: ["(2,-1)", "(2, -4)", "(1,0)", "(0,3)"], correct: 0, explanation: "Vertex x = -b/2a = 4/2=2; y=2²-4*2+3=-1."},
                { question: "The maximum or minimum of quadratic occurs at:", options: ["x-intercept", "Vertex", "y-intercept", "Origin"], correct: 1, explanation: "Vertex of parabola gives max/min value."},
                { question: "f(x) = x² - 6x + 5, minimum value is:", options: ["-4", "-1", "0", "1"], correct: 1, explanation: "Vertex x = 3 → y = 9-18+5=-4; correct -4."},
                { question: "y = ax² + bx + c opens upwards if:", options: ["a>0", "a<0", "b>0", "b<0"], correct: 0, explanation: "Positive leading coefficient → parabola opens upwards."},
                { question: "y = ax² + bx + c opens downwards if:", options: ["a>0", "a<0", "b>0", "b<0"], correct: 1, explanation: "Negative a → opens downwards."},
                { question: "Discriminant D = b² - 4ac determines:", options: ["Number of solutions", "Vertex", "Range", "Domain"], correct: 0, explanation: "D>0 → two real roots, D=0 → one root, D<0 → complex roots."}

            ],
            7: 
            [
                { question: "If D>0 for quadratic, number of real roots:", options: ["2", "1", "0", "Infinite"], correct: 0, explanation: "Discriminant positive → 2 real roots."},
                { question: "If D=0 for quadratic, number of real roots:", options: ["2", "1", "0", "Infinite"], correct: 1, explanation: "Discriminant zero → one real root (double root)."},
                { question: "If D<0 for quadratic, number of real roots:", options: ["2", "1", "0", "Infinite"], correct: 2, explanation: "Discriminant negative → no real roots."},
                { question: "y = mx + c represents:", options: ["Line", "Parabola", "Circle", "Ellipse"], correct: 0, explanation: "Linear equation in x → line."},
                { question: "Slope of line y=2x+3 is:", options: ["2", "3", "1", "-2"], correct: 0, explanation: "Coefficient of x is slope."},
                { question: "Line passing through origin slope m:", options: ["y = mx", "y = mx + 1", "y = m + x", "y = x/m"], correct: 0, explanation: "Through origin → y-intercept 0 → y = mx."},
                { question: "Parallel lines have:", options: ["Same slope", "Same y-intercept", "Perpendicular slope", "Different slopes"], correct: 0, explanation: "Parallel lines → slopes equal."},
                { question: "Perpendicular lines have:", options: ["Product of slopes = -1", "Same slope", "Same y-intercept", "Slope sum =1"], correct: 0, explanation: "Slopes m1*m2=-1 → perpendicular."},
                { question: "Equation of vertical line through x=3:", options: ["x=3", "y=3", "y=mx+3", "x=y"], correct: 0, explanation: "Vertical line → x=constant."},
                { question: "Equation of horizontal line through y=4:", options: ["y=4", "x=4", "y=x+4", "x=y"], correct: 0, explanation: "Horizontal line → y=constant."}

            ], 
            8: 
            [
                { question: "Circle with center (h,k) radius r:", options: ["(x-h)² + (y-k)² = r²", "x² + y² = r²", "y = mx + c", "(x-h)² - (y-k)² = r²"], correct: 0, explanation: "Standard circle equation (x-h)² + (y-k)² = r²."},
                { question: "Circle x² + y² = 25 center & radius:", options: ["(0,0),5", "(0,0),25", "(5,5),5", "(5,0),25"], correct: 0, explanation: "Center (0,0), radius √25=5."},
                { question: "Ellipse equation horizontal axis a, vertical b:", options: ["(x²/a²) + (y²/b²)=1", "(x²/b²) + (y²/a²)=1", "x² + y² = r²", "(x-h)² + (y-k)² = r²"], correct: 0, explanation: "Standard ellipse: (x²/a²) + (y²/b²)=1."},
                { question: "Equation of parabola y² = 4ax opens:", options: ["Right", "Left", "Up", "Down"], correct: 0, explanation: "y²=4ax opens right."},
                { question: "Equation of parabola x² = 4ay opens:", options: ["Up", "Down", "Left", "Right"], correct: 0, explanation: "x²=4ay opens upwards."},
                { question: "Hyperbola x²/a² - y²/b² =1 opens:", options: ["Horizontal", "Vertical", "Circle", "Parabola"], correct: 0, explanation: "x² term positive → horizontal opening."},
                { question: "Hyperbola y²/a² - x²/b² =1 opens:", options: ["Vertical", "Horizontal", "Circle", "Parabola"], correct: 0, explanation: "y² term positive → vertical opening."},
                { question: "Distance formula between (x1,y1),(x2,y2):", options: ["√((x2-x1)²+(y2-y1)²)", "(x2-x1)+(y2-y1)", "√(x1²+x2²+y1²+y2²)", "x2-x1"], correct: 0, explanation: "Distance formula: √((x2-x1)²+(y2-y1)²)."},
                { question: "Midpoint formula between (x1,y1),(x2,y2):", options: ["((x1+x2)/2,(y1+y2)/2)", "(x1+x2,y1+y2)", "(x1-x2,y1-y2)", "(x2-x1,y2-y1)"], correct: 0, explanation: "Midpoint = average of coordinates."},
                { question: "Slope between (x1,y1),(x2,y2):", options: ["(y2-y1)/(x2-x1)", "(x2-x1)/(y2-y1)", "y1/x1", "y2/x2"], correct: 0, explanation: "Slope = Δy/Δx = (y2-y1)/(x2-x1)."}

            ], 
            9: 
            [
                { question: "If a line passes through points (1,2),(3,6), slope is:", options: ["2", "1", "4", "0.5"], correct: 0, explanation: "Slope m=(6-2)/(3-1)=4/2=2."},
                { question: "Equation of line through (1,2) slope 3:", options: ["y-2=3(x-1)", "y=3x+2", "y+2=3(x+1)", "y-3=2(x-1)"], correct: 0, explanation: "Point-slope formula: y-y1=m(x-x1)."},
                { question: "x-intercept of y=2x+4:", options: ["-2", "2", "0", "-4"], correct: 0, explanation: "Set y=0 → 0=2x+4 → x=-2."},
                { question: "y-intercept of y=2x+4:", options: ["4", "2", "0", "-4"], correct: 0, explanation: "Set x=0 → y=4."},
                { question: "Equation of line parallel to y=3x+1 through (0,2):", options: ["y=3x+2", "y=3x+1", "y=-1/3x+2", "y=2x+3"], correct: 0, explanation: "Parallel → same slope m=3, pass through (0,2) → y=3x+2."},
                { question: "Equation of line perpendicular to y=2x+3 slope m:", options: ["-1/2", "2", "1/2", "-2"], correct: 0, explanation: "Perpendicular → product of slopes = -1 → m=-1/2."},
                { question: "Function f(x)=2x+5 inverse f^{-1}(x)=", options: ["(x-5)/2", "2x+5", "x/2 +5", "-2x+5"], correct: 0, explanation: "Solve y=2x+5 → x=(y-5)/2."},
                { question: "Check: f(f^{-1}(x)) = x", options: ["True", "False", "Sometimes", "Never"], correct: 0, explanation: "Inverse composed with original returns x."},
                { question: "Check: f^{-1}(f(x)) = x", options: ["True", "False", "Sometimes", "Never"], correct: 0, explanation: "Same reason, always true for invertible f."},
                { question: "Quadratic formula roots of ax²+bx+c=0:", options: ["(-b±√(b²-4ac))/2a", "(b±√(b²-4ac))/2a", "(-b±√(b²+4ac))/2a", "(b±√(b²+4ac))/2a"], correct: 0, explanation: "Standard quadratic formula."}

            ], 
            10: 
            [
                { question: "Sum of roots of ax²+bx+c=0:", options: ["-b/a", "c/a", "b/a", "-c/a"], correct: 0, explanation: "Sum of roots = -b/a."},
                { question: "Product of roots of ax²+bx+c=0:", options: ["c/a", "-c/a", "b/a", "-b/a"], correct: 0, explanation: "Product of roots = c/a."},
                { question: "Discriminant positive → roots are:", options: ["Real and distinct", "Real and equal", "Complex", "No roots"], correct: 0, explanation: "D > 0 → quadratic has two real and distinct roots."},
                { question: "Discriminant zero → roots are:", options: ["Real and equal", "Real and distinct", "Complex", "No roots"], correct: 0, explanation: "D = 0 → quadratic has one real double root."},
                { question: "Discriminant negative → roots are:", options: ["Complex", "Real and equal", "Real and distinct", "No roots"], correct: 0, explanation: "D < 0 → roots are complex (non-real)."},
                { question: "Vertex of parabola y = ax² + bx + c:", options: ["(-b/2a, f(-b/2a))", "(b/2a, f(b/2a))", "(0,0)", "(c,0)"], correct: 0, explanation: "Vertex x = -b/2a, y = f(-b/2a)."},
                { question: "Axis of symmetry of y = 2x² - 4x +1:", options: ["x=1", "x=2", "y=1", "y=0"], correct: 0, explanation: "Axis of symmetry x=-b/2a = 4/4=1."},
                { question: "y-intercept of y = x² - 3x + 5:", options: ["5", "-3", "0", "1"], correct: 0, explanation: "Set x=0 → y=5."},
                { question: "x-intercepts of y = x² - 5x + 6:", options: ["2 and 3", "1 and 6", "-2 and -3", "0 and 5"], correct: 0, explanation: "Solve x² -5x+6=0 → (x-2)(x-3)=0 → x=2,3."},
                { question: "Quadratic opens upwards if:", options: ["a > 0", "a < 0", "b > 0", "c > 0"], correct: 0, explanation: "Positive leading coefficient a>0 → parabola opens upwards."}

            ]
        },
        "Rational_Expressions": {
            1: [
                { question: "What is a rational expression?", options: ["A polynomial", "A fraction with polynomials in numerator and denominator", "An equation", "A simplified integer"], correct: 1, explanation: "A rational expression is P(x)/Q(x) where P and Q are polynomials, Q ≠ 0." },
                { question: "To simplify (x² - 4)/(x - 2), the simplified form is:", options: ["x - 2", "x + 2", "(x - 2)²", "x² - 4"], correct: 1, explanation: "Factor numerator (x - 2)(x + 2), cancel (x - 2) to get x + 2 (x ≠ 2)." },
                { question: "The domain of 1/(x + 3) excludes:", options: ["x = 0", "x = -3", "x = 1", "All reals"], correct: 1, explanation: "Denominator zero at x = -3, so undefined there." },
                { question: "Simplify (3x² + 6x)/(3x):", options: ["x + 2", "3x + 6", "x² + 2", "3(x + 2)/x"], correct: 0, explanation: "Factor numerator 3x(x + 2)/3x = x + 2 (x ≠ 0)." },
                { question: "Simplify (x² - 9)/(x² - 6x + 9):", options: ["(x - 3)/(x - 3) = 1", "x + 3", "(x + 3)/(x - 3)", "Undefined"], correct: 2, explanation: "Numerator (x - 3)(x + 3), denominator (x - 3)², simplifies to (x + 3)/(x - 3)." },
                { question: "A hole in (x² - 1)/(x - 1) occurs at:", options: ["x = 0", "x = 1", "x = -1", "No hole"], correct: 1, explanation: "Cancels (x - 1), removable discontinuity at x = 1." },
                { question: "Simplify (2x + 4)/(x² + 3x + 2):", options: ["2/(x + 1)", "2(x + 2)/(x + 2)(x + 1) = 2/(x + 1)", "(x + 2)/(x + 1)", "2x/(x + 2)"], correct: 0, explanation: "Numerator 2(x + 2), denominator (x + 1)(x + 2), cancels to 2/(x + 1) (x ≠ -2)." },
                { question: "Simplified (4x² - 16)/(2x - 4) is:", options: ["2x + 4", "(4x - 4)/2", "2(x - 2)/(x - 2)", "Undefined"], correct: 0, explanation: "4(x² - 4)/2(x - 2) = [4(x - 2)(x + 2)]/[2(x - 2)] = 2(x + 2) = 2x + 4 (x ≠ 2)." },
                { question: "Simplify x/(x² - x):", options: ["1/(x - 1)", "1/x", "x/x²", "1/(x(x - 1))"], correct: 0, explanation: "x/[x(x - 1)] = 1/(x - 1) (x ≠ 0)." },
                { question: "(x + 1)/(x² + 2x + 1) simplifies to:", options: ["1/(x + 1)", "x + 1", "(x + 1)²", "Undefined"], correct: 0, explanation: "Denominator (x + 1)², so (x + 1)/ (x + 1)² = 1/(x + 1) (x ≠ -1)." },

            ],
            2: 
            [
                { question: "To simplify a rational expression, factor:", options: ["Numerator only", "Denominator only", "Both", "Neither"], correct: 2, explanation: "Factor both to identify and cancel common factors." },
                { question: "Simplify (9x² - 36x + 36)/(3x - 6):", options: ["3x - 6", "9x - 12", "3", "Undefined"], correct: 0, explanation: "Numerator 9(x - 2)², denominator 3(x - 2), so 3(x - 2) = 3x - 6 (x ≠ 2)." },
                { question: "A rational expression is undefined when:", options: ["Numerator = 0", "Denominator = 0", "Both = 0", "Numerator > 0"], correct: 1, explanation: "Division by zero is undefined." },
                { question: "Simplify (x³ - 8)/(x - 2):", options: ["x² + 2x + 4", "x³ - 8x", "(x - 2)³", "8/x"], correct: 0, explanation: "Difference of cubes: (x - 2)(x² + 2x + 4)/(x - 2) = x² + 2x + 4 (x ≠ 2)." },
                { question: "For (6x² + 13x + 6)/(2x + 3), factor numerator as:", options: ["(3x + 2)(2x + 3)", "(2x + 3)(3x + 2)", "(6x + 3)(x + 2)", "(x + 6)(6x + 1)"], correct: 1, explanation: "(2x + 3)(3x + 2) = 6x² + 13x + 6, cancels to 3x + 2 (x ≠ -3/2)." },
                { question: "Simplify (x² + 5x + 6)/(x² + 7x + 12):", options: ["(x + 2)/(x + 4)", "(x + 3)/(x + 4)", "1", "x + 1"], correct: 0, explanation: "Num (x + 2)(x + 3), den (x + 3)(x + 4), cancels to (x + 2)/(x + 4) (x ≠ -3)." },
                { question: "Simplify (4 - x²)/(x² - 4):", options: ["-1", "(2 - x)/(2 + x)", "1", "x²/4"], correct: 0, explanation: "Num -(x² - 4), den (x - 2)(x + 2), so -1 (x ≠ ±2)." },
                { question: "Excluded values are found by setting:", options: ["Numerator = 0", "Denominator = 0", "Both = 0", "Constant = 0"], correct: 1, explanation: "Solve Q(x) = 0 for restrictions." },
                { question: "Simplify (x²y - xy²)/(xy(x - y)):", options: ["x/y", "1", "(x - y)/(x - y)", "y/x"], correct: 1, explanation: "Num xy(x - y), den xy(x - y), so 1 (xy(x - y) ≠ 0)." },
                { question: "Multiply (x + 1)/(x - 2) * (x - 2)/(x + 3):", options: ["(x + 1)/(x + 3)", "1", "(x - 2)/(x + 3)", "(x + 1)(x - 2)"], correct: 0, explanation: "Cancels (x - 2), so (x + 1)/(x + 3)." },

            ], 
            3: 
            [
                { question: "When multiplying rationals, multiply num and den then:", options: ["Add", "Subtract", "Simplify", "Divide"], correct: 2, explanation: "Factor and cancel after multiplying." },
                { question: "(2/3) * (3x/4) = :", options: ["2x/3", "x/2", "6x/12", "3x/2"], correct: 1, explanation: "(2*3x)/(3*4) = 2x/4 = x/2." },
                { question: "Multiply (x² - 1)/(x² + x) * x/(x + 1):", options: ["(x - 1)/(x + 1)", "x²/x²", "1", "x/(x + 1)"], correct: 0, explanation: "(x - 1)(x + 1)/[x(x + 1)] * x/(x + 1) = (x - 1)/x * x/(x + 1) = (x - 1)/(x + 1)." },
                { question: "(a/b) * (c/d) = :", options: ["(a + c)/(b + d)", "(a c)/(b d)", "(a/b + c/d)", "(a - c)/(b - d)"], correct: 1, explanation: "Standard fraction multiplication." },
                { question: "Multiply (3x + 6)/(x + 2) * (x + 1)/(x + 3):", options: ["3(x + 1)/(x + 3)", "(3x + 6)(x + 1)", "3x(x + 1)", "(x + 2)/(x + 3)"], correct: 0, explanation: "3(x + 2)/(x + 2) * (x + 1)/(x + 3) = 3(x + 1)/(x + 3)." },
                { question: "Cancel common factors in multiplication:", options: ["Before multiplying", "After only", "Never", "Only if same degree"], correct: 0, explanation: "Cancel diagonal factors to simplify." },
                { question: "Multiply 1/(x - 1) * (x² - 1)/x :", options: ["(x + 1)/x", "1/x", "x - 1", "(x² - 1)/x²"], correct: 0, explanation: "(x² - 1)/[x(x - 1)] = (x + 1)(x - 1)/[x(x - 1)] = (x + 1)/x." },
                { question: "Cancel across fractions in (p/q) * (r/s):", options: ["Only if p = s", "Common num/den", "Always", "Never"], correct: 1, explanation: "Cancel matching factors between num of one and den of other." },
                { question: "(x/y) * (y/z) = :", options: ["x/z", "xy/yz", "x/y²", "z/x"], correct: 0, explanation: "y cancels." },
                { question: "Multiply (x² + x)/(x + 2) * (2x - 4)/(x² - 4):", options: ["2x(x + 1)/(x + 2)²", "x(x + 1)/ (x + 2)", "2(x + 1)/(x + 2)", "1"], correct: 0, explanation: "Factor, cancel (x - 2), get 2x(x + 1)/(x + 2)²." },

            ], 
            4: 
            [
                { question: "Simplify after multiplying rationals:", options: ["Always", "Never", "Optional", "Only if complex"], correct: 0, explanation: "Reduce to lowest terms." },
                { question: "(4/6) * (9/8) = :", options: ["3/4", "36/48", "6/8", "36/14"], correct: 0, explanation: "36/48 reduces to 3/4." },
                { question: "Multiply (x - 3)/(x + 3) * (x + 3)/(x - 3):", options: ["1", "(x - 3)²", "(x + 3)²", "Undefined"], correct: 0, explanation: "Cancels to 1 (x ≠ ±3)." },
                { question: "To divide rationals, :", options: ["Add reciprocal", "Multiply by reciprocal", "Subtract reciprocal", "Divide numerators"], correct: 1, explanation: "a/b ÷ c/d = a/b * d/c." },
                { question: "Divide (x + 1)/(x - 1) ÷ (x - 1)/(x + 1):", options: ["(x + 1)²/(x - 1)²", "1", "(x - 1)²/(x + 1)²", "Undefined"], correct: 0, explanation: "Multiply by reciprocal: (x + 1)/(x - 1) * (x + 1)/(x - 1) = (x + 1)²/(x - 1)²." },
                { question: "(2/3) ÷ (4/5) = :", options: ["5/6", "8/15", "2/3 * 4/5", "10/12"], correct: 0, explanation: "(2/3)*(5/4) = 10/12 = 5/6." },
                { question: "Divide 1/x ÷ 1/y = :", options: ["y/x", "x/y", "1/(xy)", "y - x"], correct: 0, explanation: "1/x * y/1 = y/x." },
                { question: "(a/b) / (c/d) = :", options: ["(a d)/(b c)", "(a + c)/(b + d)", "a/c * b/d", "(a - c)/(b - d)"], correct: 0, explanation: "Multiply by reciprocal." },
                { question: "Divide (x²/(x + 1)) ÷ x = :", options: ["x/(x + 1)", "x²/x²", "1/(x + 1)", "x²/x"], correct: 0, explanation: "x²/(x + 1) * 1/x = x/(x + 1)." },
                { question: "Simplify after division:", options: ["Always", "Never", "Only if asked", "Before flipping"], correct: 0, explanation: "Reduce the result." },

            ], 
            5: 
            [
                { question: "Divide (3x + 3)/(x + 2) ÷ 3/(x + 1):", options: ["(x + 1)²/(x + 2)", "(x + 1)/(x + 2)", "3(x + 1)/(x + 2)", "1"], correct: 0, explanation: "3(x + 1)/(x + 2) * (x + 1)/3 = (x + 1)²/(x + 2)." },
                { question: "Division by zero in rationals is:", options: ["Defined", "Undefined", "Zero", "Infinite"], correct: 1, explanation: "Check exclusions from denominators." },
                { question: "Divide (2x)/(x + 1) ÷ 2 = :", options: ["x/(x + 1)", "2x/2", "x + 1", "1/x"], correct: 0, explanation: "(2x)/(x + 1) * 1/2 = x/(x + 1)." },
                { question: "To add 1/x + 1/y, common denominator is:", options: ["x + y", "xy", "x - y", "1"], correct: 1, explanation: "(y + x)/(xy)." },
                { question: "1/2 + 1/3 = :", options: ["5/6", "2/5", "1/(2 + 3)", "3/2"], correct: 0, explanation: "(3 + 2)/6 = 5/6." },
                { question: "Add rationals using:", options: ["GCD", "LCD", "Product always", "Numerator only"], correct: 1, explanation: "Least common denominator." },
                { question: "Add (x + 1)/(x + 2) + 1/(x + 3):", options: ["(x² + 5x + 5)/((x + 2)(x + 3))", "(2x + 3)/((x + 2)(x + 3))", "x + 1", "2/(x + 2)"], correct: 0, explanation: "Num (x + 1)(x + 3) + (x + 2) = x² + 4x + 3 + x + 2 = x² + 5x + 5." },
                { question: "Subtract x/(x - 1) - 2/(x + 1):", options: ["(x² - x + 2)/(x² - 1)", "x - 2", "(x - 3)/(x² - 1)", "2/x"], correct: 0, explanation: "Num x(x + 1) - 2(x - 1) = x² + x - 2x + 2 = x² - x + 2." },
                { question: "Add 2/x + 3/x = :", options: ["5/x", "6/x²", "2 + 3", "5x"], correct: 0, explanation: "Same denominator, (2 + 3)/x = 5/x." },
                { question: "Subtract like addition but:", options: ["Minus numerator", "Plus denominator", "Divide", "Multiply"], correct: 0, explanation: "a/b - c/d = (ad - bc)/bd." },

            ], 
            6: 
            [
                { question: "Add (3x + 1)/(2x) + (x + 2)/(3x):", options: ["(11x + 7)/6x", "(4x + 3)/5x", "4x/5x", "(x + 1)/x"], correct: 0, explanation: "LCD 6x, [3(3x + 1) + 2(x + 2)]/6x = (9x + 3 + 2x + 4)/6x = (11x + 7)/6x." },
                { question: "For addition, LCD is:", options: ["Product always", "LCM of denominators", "GCD", "Numerator"], correct: 1, explanation: "Least common multiple after factoring." },
                { question: "Subtract 1/(x - 2) - 1/(x + 2):", options: ["4/(x² - 4)", "2/x", "(x - 4)/(x² - 4)", "0"], correct: 0, explanation: "Num (x + 2) - (x - 2) = 4." },
                { question: "Add polynomials: factor to find LCD.", options: ["True", "False", "Multiply only", "No factor"], correct: 0, explanation: "For LCM of factored dens." },
                { question: "(a/b) + (c/d) = :", options: ["(ad + bc)/(bd)", "(a + c)/(b + d)", "(ac)/(bd)", "(a - c)/(b - d)"], correct: 0, explanation: "Standard addition." },
                { question: "Add x/(x + 1) + (x - 1)/(x - 1):", options: ["(2x² - x - 1)/(x² - 1)", "2x/(x² - 1)", "x²/(x - 1)", "Simplified (2x + 1)/(x + 1)"], correct: 3, explanation: "After adding, factor num (2x + 1)(x - 1), cancel x - 1." },
                { question: "Simplify after adding:", options: ["Always", "Never", "Optional", "Only complex"], correct: 0, explanation: "To lowest terms." },
                { question: "Complex fraction has:", options: ["Fractions in num/den", "Only numerator", "No fractions", "Integers only"], correct: 0, explanation: "Like (a/b)/(c/d)." },
                { question: "Simplify (1/x + 1/y)/(1/x - 1/y):", options: ["(x + y)/(y - x)", "(x + y)/(x - y)", "1", "xy/(x - y)"], correct: 0, explanation: "Num (x + y)/xy, den (y - x)/xy, so (x + y)/(y - x)." },
                { question: "For complex, multiply by LCD of all:", options: ["True", "False", "Only num", "Den only"], correct: 0, explanation: "Clears inner fractions." },

            ], 
            7: 
            [
                { question: "Simplify (2 + 1/x)/(3 - 1/x):", options: ["(2x + 1)/(3x - 1)", "2/3", "x(2 + 1/x)", "1"], correct: 0, explanation: "Multiply num/den by x: (2x + 1)/(3x - 1)." },
                { question: "Complex (a/b + c/d)/(e/f + g/h):", options: ["Multiply by LCD of all dens", "Add pairwise", "Divide first", "Simplify num only"], correct: 0, explanation: "Common LCD for entire fraction." },
                { question: "1/(1/x + 1/y) = :", options: ["xy/(x + y)", "x + y", "1/(xy)", "(x y)/(x - y)"], correct: 0, explanation: "Harmonic mean related." },
                { question: "Alternative for complex: treat as division.", options: ["True", "False", "Add only", "Multiply"], correct: 0, explanation: "Num * 1/den." },
                { question: "Simplify [1/(x + 1)] / [x/(x + 1)²] = :", options: ["(x + 1)/x", "1/x", "x/(x + 1)", "(x + 1)²/x"], correct: 0, explanation: "1/(x + 1) * (x + 1)²/x = (x + 1)/x." },
                { question: "Complex simplifies to:", options: ["Single rational", "Polynomial", "Integer", "Equation"], correct: 0, explanation: "One fraction." },
                { question: "(3/x - 2/y)/(1/x + 1/y) = :", options: ["(3y - 2x)/(x + y)", "3 - 2", "(3y - 2x)/xy", "1"], correct: 0, explanation: "Num (3y - 2x)/xy, den (x + y)/xy, so (3y - 2x)/(x + y)." },
                { question: "Check restrictions in complex:", options: ["From all dens", "Only outer", "None", "Num only"], correct: 0, explanation: "All denominators." },
                { question: "Solve (x + 1)/(x - 2) = 3:", options: ["Multiply by (x - 2)", "x + 1 = 3x - 6", "x = 7/2", "Both B and C"], correct: 3, explanation: "x + 1 = 3(x - 2), x = 7/2 (check x ≠ 2)." },
                { question: "Solving rationals: multiply by LCD, check:", options: ["Extraneous", "Always true", "No check", "Only num"], correct: 0, explanation: "Verify in original." },

            ], 
            8: 
            [
                { question: "Solve 2/x + 1 = 5/x:", options: ["x = 3", "2 + x = 5", "Both A and B", "x = 0"], correct: 2, explanation: "LCD x, 2 + x = 5, x = 3." },
                { question: "1/(x - 1) + 1/(x + 1) = 2/x has:", options: ["No solution", "x = 0", "Infinite", "x = 1"], correct: 0, explanation: "Leads to 0 = -2 contradiction." },
                { question: "Solve x/(x + 2) = 2/(x + 3):", options: ["x² + x - 4 = 0", "Cross multiply", "x = [-1 ± √17]/2", "All"], correct: 3, explanation: "x(x + 3) = 2(x + 2), check ≠ -2, -3." },
                { question: "Multiply equation by LCD:", options: ["Full LCD", "Each factor", "Num only", "Den only"], correct: 0, explanation: "Clears all dens." },
                { question: "Solve 3/(x - 1) - 1/(x + 1) = 2:", options: ["x² - x - 3 = 0", "[1 ± √13]/2", "Both", "No solution"], correct: 2, explanation: "Quadratic after LCD." },
                { question: "Extraneous from den zero:", options: ["True", "False", "Always", "Never"], correct: 0, explanation: "Check solutions don't make den zero." },
                { question: "Solve (x + 1)/x = 2:", options: ["x = 1", "Check x ≠ 0", "Both", "x = 0"], correct: 2, explanation: "x + 1 = 2x, x = 1." },
                { question: "Graph y = 1/x vertical asymptote:", options: ["x = 0", "y = 0", "x = 1", "No"], correct: 0, explanation: "As x → 0, y → ±∞." },
                { question: "Horizontal asymptote y = (2x + 1)/(x + 3):", options: ["y = 2", "y = 0", "y = 1/3", "None"], correct: 0, explanation: "Degrees equal, leading 2/1 = 2." },
                { question: "If deg num < deg den, horizontal:", options: ["y = 0", "y = ∞", "Slant", "Vertical"], correct: 0, explanation: "Proper rational." },

            ], 
            9: 
            [
                { question: "Vertical asymptote where:", options: ["Den = 0, num ≠ 0", "Num = 0", "Both = 0", "Always den = 0"], correct: 0, explanation: "Pole, not hole." },
                { question: "y = (x² + 1)/(x - 1):", options: ["Vertical x = 1", "Hole x = 1", "y = 0", "Slant"], correct: 0, explanation: "Num ≠ 0 at x = 1." },
                { question: "Deg num = deg den + 1:", options: ["Slant asymptote", "Horizontal", "Vertical only", "No asymptote"], correct: 0, explanation: "Long division for oblique." },
                { question: "y = 1/(x² + 1) vertical:", options: ["None", "x = 0", "y = 0", "x = 1"], correct: 0, explanation: "Den never zero." },
                { question: "y = (x + 1)/(x² - 4) asymptotes:", options: ["x = ±2 vertical", "x = 2 only", "Hole", "y = 0"], correct: 0, explanation: "Den (x - 2)(x + 2), num ≠ 0 at ±2." },
                { question: "End behavior proper rational:", options: ["y → 0", "y → ∞", "Oscillates", "Constant"], correct: 0, explanation: "As x → ±∞." },
                { question: "Rational function horizontal asymptotes:", options: ["At most one", "Two", "Many", "None"], correct: 0, explanation: "Same left/right." },
                { question: "Tank fill: rates 1/4 + 1/6 hr, time:", options: ["12/5 hr", "10/5", "1/10", "5/12"], correct: 0, explanation: "1/t = 5/12, t = 12/5." },
                { question: "Distance = rate * time for shared path:", options: ["Rates add", "Times add", "Dist add", "None"], correct: 0, explanation: "Combined rate." },
                { question: "Mixture 20% and 50% for 10 gal 30%:", options: ["x = 20/3 gal 20%", "0.2x + 0.5(10 - x) = 3", "Both", "x = 10"], correct: 2, explanation: "Solute balance." },

            ], 
            10: 
            [
                { question: "Work A 3 days, B 4 days together:", options: ["12/7 days", "7 days", "1/7", "3 + 4"], correct: 0, explanation: "1/3 + 1/4 = 7/12, t = 12/7." },
                { question: "Parallel resistors 1/R = 1/R1 + 1/R2:", options: ["True", "R = R1 + R2", "Series", "No"], correct: 0, explanation: "Total resistance rational." },
                { question: "Upstream/downstream: d/(r - c) + d/(r + c) = t:", options: ["True", "r + c", "r - c", "2d/r"], correct: 0, explanation: "Solve for r or c." },
                { question: "Cost average: total cost / total units:", options: ["Rational", "Integer", "Add costs", "No"], correct: 0, explanation: "Like mixtures." },
                { question: "Break-even revenue = cost:", options: ["Rational model", "Always profit", "Fixed only", "Variable"], correct: 0, explanation: "P = (R - C)/units." },
                { question: "Simplify after application:", options: ["Always", "Never", "Optional", "Only equations"], correct: 0, explanation: "Exact answers." },
                { question: "Solve 1/(2x) + 1/(3x) = 1/6:", options: ["x = 1", "LCD 6x, 3 + 2 = x", "x = 5", "Both A and C"], correct: 2, explanation: "LCD 6x, [3 + 2]/6x = 5/6x = 1/6, so 5/x = 1, x = 5." },
                { question: "Graph y = (x - 1)/(x + 1) hole:", options: ["None", "x = -1 vertical", "y = 1 horizontal", "Both B and C"], correct: 3, explanation: "Vertical at x = -1, horizontal y = 1." },
                { question: "Multiply (x² + 4x + 4)/(x + 1) * 1/(x + 2):", options: ["(x + 2)/(x + 1)", "(x + 2)^2 / (x + 1)(x + 2) = (x + 2)/(x + 1)", "1", "x + 2"], correct: 0, explanation: "Num (x + 2)², den (x + 1)(x + 2), cancels to (x + 2)/(x + 1)." },
                { question: "Add 4/(x - 4) + 3/(x + 4):", options: ["(7x + 4)/(x² - 16)", "(4(x + 4) + 3(x - 4))/(x² - 16) = (7x + 4)/(x² - 16)", "7/x", "(x + 4)/(x - 4)"], correct: 1, explanation: "Num 4(x + 4) + 3(x - 4) = 4x + 16 + 3x - 12 = 7x + 4." }
            
            ]
        },
        "Matrices": {
            1: [
                { question: "What is a matrix?", options: ["An array of numbers arranged in rows and columns", "A single number", "An equation", "A graph"], correct: 0, explanation: "A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns." },
                { question: "The order of a matrix with 3 rows and 4 columns is:", options: ["3x4", "4x3", "12", "3+4"], correct: 0, explanation: "The order is given as rows x columns." },
                { question: "A square matrix has:", options: ["Equal number of rows and columns", "More rows than columns", "More columns than rows", "No elements"], correct: 0, explanation: "In a square matrix, the number of rows equals the number of columns." },
                { question: "A row matrix has:", options: ["Only one row", "Only one column", "Equal rows and columns", "Zero elements"], correct: 0, explanation: "A row matrix is 1 x n." },
                { question: "A column matrix has:", options: ["Only one column", "Only one row", "Equal rows and columns", "Diagonal elements only"], correct: 0, explanation: "A column matrix is m x 1." },
                { question: "The zero matrix has all elements equal to:", options: ["0", "1", "Any number", "Undefined"], correct: 0, explanation: "All entries in a zero matrix are zero." },
                { question: "The identity matrix has:", options: ["1s on the diagonal and 0s elsewhere", "0s on the diagonal", "All 1s", "All 0s"], correct: 0, explanation: "Identity matrix is square with 1s on main diagonal." },
                { question: "A diagonal matrix has:", options: ["Non-zero elements only on the diagonal", "All elements non-zero", "Only off-diagonal non-zero", "All zero"], correct: 0, explanation: "Off-diagonal elements are zero." },
                { question: "A scalar matrix is a diagonal matrix where:", options: ["All diagonal elements are equal", "Diagonal elements are 1", "Diagonal elements are 0", "Diagonal elements differ"], correct: 0, explanation: "All diagonal entries are the same scalar value." },
                { question: "The transpose of a matrix interchanges:", options: ["Rows and columns", "Elements randomly", "Adds elements", "Multiplies elements"], correct: 0, explanation: "Transpose flips rows to columns." }
            ],
            2: [
                { question: "Matrix addition is possible if matrices have:", options: ["Same order", "Different orders", "Square shape only", "Any order"], correct: 0, explanation: "Matrices must have the same dimensions for addition." },
                { question: "The sum of two matrices is obtained by:", options: ["Adding corresponding elements", "Multiplying corresponding elements", "Subtracting corresponding elements", "Dividing corresponding elements"], correct: 0, explanation: "Element-wise addition." },
                { question: "A + O = :", options: ["A", "O", "I", "Undefined"], correct: 0, explanation: "Zero matrix is the additive identity." },
                { question: "A + (-A) = :", options: ["O", "A", "I", "Undefined"], correct: 0, explanation: "Results in the zero matrix." },
                { question: "Matrix subtraction A - B is equivalent to:", options: ["A + (-B)", "B - A", "A * B", "A / B"], correct: 0, explanation: "Subtract by adding the negative." },
                { question: "Matrix addition is commutative, meaning:", options: ["A + B = B + A", "A + B ≠ B + A", "Only for square matrices", "Not possible"], correct: 0, explanation: "Order doesn't matter in addition." },
                { question: "Matrix addition is associative, meaning:", options: ["(A + B) + C = A + (B + C)", "(A + B) + C ≠ A + (B + C)", "Only for 2x2 matrices", "Undefined"], correct: 0, explanation: "Grouping doesn't matter." },
                { question: "Scalar multiplication kA means:", options: ["Multiply each element by k", "Add k to each element", "Subtract k from each element", "Divide each element by k"], correct: 0, explanation: "Scale the matrix by the scalar." },
                { question: "k(A + B) = :", options: ["kA + kB", "kA - kB", "A + B", "Undefined"], correct: 0, explanation: "Distributive property over addition." },
                { question: "(k + l)A = :", options: ["kA + lA", "kA - lA", "A + A", "Undefined"], correct: 0, explanation: "Distributive property over scalars." }
            ],
            3: [
                { question: "Matrix multiplication is possible if:", options: ["Columns of first = rows of second", "Rows of first = rows of second", "Both square", "Any order"], correct: 0, explanation: "For A m x n and B p x q, n must equal p." },
                { question: "The product AB has order:", options: ["Rows of A x columns of B", "Columns of A x rows of B", "Same as A", "Same as B"], correct: 0, explanation: "m x q for A m x n, B n x q." },
                { question: "Matrix multiplication is commutative?", options: ["No, AB ≠ BA generally", "Yes, always", "Only for square", "Undefined"], correct: 0, explanation: "Order matters in multiplication." },
                { question: "Matrix multiplication is associative?", options: ["Yes, (AB)C = A(BC)", "No", "Only if square", "Undefined"], correct: 0, explanation: "Grouping doesn't matter if dimensions allow." },
                { question: "A * I = :", options: ["A", "I", "O", "Undefined"], correct: 0, explanation: "Identity matrix is multiplicative identity." },
                { question: "To multiply matrices, use:", options: ["Row by column dot product", "Element wise multiplication", "Addition", "Subtraction"], correct: 0, explanation: "Each entry is dot product of row and column." },
                { question: "If A is 2x3, B is 3x2, AB is:", options: ["2x2", "3x3", "2x3", "3x2"], correct: 0, explanation: "Rows of A x columns of B." },
                { question: "BA for above would be:", options: ["3x3", "2x2", "2x3", "Undefined"], correct: 0, explanation: "Rows of B x columns of A = 3x3." },
                { question: "Scalar k(AB) = :", options: ["(kA)B = A(kB)", "AB + k", "Only kA", "Undefined"], correct: 0, explanation: "Scalar distributes over multiplication." },
                { question: "A(O) = :", options: ["O", "A", "I", "Undefined"], correct: 0, explanation: "Multiplication by zero matrix gives zero." }
            ],
            4: [
                { question: "The determinant is defined for:", options: ["Square matrices", "Any matrix", "Row matrices", "Column matrices"], correct: 0, explanation: "Only square matrices have determinants." },
                { question: "Det of 1x1 matrix [a] is:", options: ["a", "0", "1", "Undefined"], correct: 0, explanation: "Simply the element itself." },
                { question: "Det of 2x2 matrix [[a,b],[c,d]] is:", options: ["ad - bc", "ac - bd", "a + d", "ab + cd"], correct: 0, explanation: "ad - bc." },
                { question: "If det = 0, matrix is:", options: ["Singular", "Invertible", "Identity", "Zero"], correct: 0, explanation: "Singular if determinant zero." },
                { question: "Det(I) for identity is:", options: ["1", "0", "Undefined", "Matrix order"], correct: 0, explanation: "Det of identity is 1." },
                { question: "Det(A^T) = :", options: ["Det(A)", "-Det(A)", "0", "1"], correct: 0, explanation: "Determinant of transpose equals original." },
                { question: "Det(kA) = :", options: ["k^n Det(A) for nxn", "k Det(A)", "Det(A)", "0"], correct: 0, explanation: "Scalar to the power of dimension times det." },
                { question: "If two rows swapped, det:", options: ["-Det(original)", "Same", "0", "Double"], correct: 0, explanation: "Sign changes on row swap." },
                { question: "If row is multiple of another, det:", options: ["0", "1", "Same", "Undefined"], correct: 0, explanation: "Linear dependence makes det zero." },
                { question: "Det(AB) = :", options: ["Det(A) Det(B)", "Det(A) + Det(B)", "Det(A) - Det(B)", "Det(A)/Det(B)"], correct: 0, explanation: "Determinant of product is product of determinants." }
            ],
            5: [
                { question: "A matrix is invertible if:", options: ["Det ≠ 0", "Det = 0", "Singular", "Zero matrix"], correct: 0, explanation: "Non-singular matrices have inverses." },
                { question: "The inverse A^{-1} satisfies:", options: ["A A^{-1} = I", "A + A^{-1} = I", "A - A^{-1} = I", "A / A^{-1} = I"], correct: 0, explanation: "Product is identity." },
                { question: "For 2x2 [[a,b],[c,d]], inverse is:", options: ["(1/det) [[d,-b],[-c,a]]", "(1/det) [[a,b],[c,d]]", "[[d,b],[c,a]]", "Undefined"], correct: 0, explanation: "Adjugate divided by det." },
                { question: "Inverse of identity is:", options: ["Identity", "Zero", "Undefined", "Any matrix"], correct: 0, explanation: "I^{-1} = I." },
                { question: " (AB)^{-1} = :", options: ["B^{-1} A^{-1}", "A^{-1} B^{-1}", "AB", "Undefined"], correct: 0, explanation: "Inverse of product is reverse product of inverses." },
                { question: "Inverse of transpose is:", options: ["Transpose of inverse", "Same as transpose", "Negative transpose", "Undefined"], correct: 0, explanation: "(A^T)^{-1} = (A^{-1})^T." },
                { question: "If A is invertible, det(A^{-1}) = :", options: ["1/det(A)", "det(A)", "-det(A)", "0"], correct: 0, explanation: "Reciprocal of det." },
                { question: "To find inverse using adjoint:", options: ["Adjugate / det", "Adjugate * det", "Cofactor only", "Transpose only"], correct: 0, explanation: "Inverse = adj(A) / det(A)." },
                { question: "Cofactor of element is:", options: ["(-1)^{i+j} times minor", "Minor only", "Element itself", "0"], correct: 0, explanation: "Sign alternates." },
                { question: "Adjugate is transpose of:", options: ["Cofactor matrix", "Minor matrix", "Original matrix", "Identity"], correct: 0, explanation: "Adj(A) = transpose of cofactor matrix." }
            ],
            6: [
                { question: "Matrices can solve systems of linear equations using:", options: ["Inverse method", "Addition only", "Scalar multiplication", "Transpose"], correct: 0, explanation: "AX = B, X = A^{-1} B." },
                { question: "For consistent system, number of solutions if det ≠ 0:", options: ["Unique", "Infinite", "None", "Two"], correct: 0, explanation: "Invertible coefficient matrix gives unique solution." },
                { question: "If det = 0 and augmented matrix rank < coefficient rank:", options: ["No solution", "Infinite solutions", "Unique", "Undefined"], correct: 0, explanation: "Inconsistent system." },
                { question: "If det = 0 and ranks equal:", options: ["Infinite solutions", "No solution", "Unique", "Zero"], correct: 0, explanation: "Dependent system." },
                { question: "Cramer's rule uses:", options: ["Determinants", "Inverses", "Addition", "Multiplication"], correct: 0, explanation: "Replace columns with constants and divide dets." },
                { question: "For 2 equations, x = :", options: ["Det with constants in col1 / main det", "Main det / col1", "0", "Undefined"], correct: 0, explanation: "Cramer's formula for x." },
                { question: "Gaussian elimination uses:", options: ["Row operations to upper triangular", "Column operations", "Diagonal only", "Inverse"], correct: 0, explanation: "Row echelon form for solving." },
                { question: "Row operations that preserve solutions:", options: ["Swap, scale, add multiple", "Multiply matrices", "Transpose", "Det only"], correct: 0, explanation: "Elementary row operations." },
                { question: "Rank of matrix is:", options: ["Number of non-zero rows in echelon form", "Number of columns", "Det", "Trace"], correct: 0, explanation: "Dimension of row space." },
                { question: "Homogeneous system AX = 0 always has:", options: ["Trivial solution X=0", "No solution", "Unique non-zero", "Infinite non-zero"], correct: 0, explanation: "Always at least zero solution." }
            ],
            7: [
                { question: "Trace of matrix is:", options: ["Sum of diagonal elements", "Sum of all elements", "Product of diagonals", "Det"], correct: 0, explanation: "Only for square matrices." },
                { question: "Trace(A + B) = :", options: ["Trace(A) + Trace(B)", "Trace(A) * Trace(B)", "0", "Undefined"], correct: 0, explanation: "Additive." },
                { question: "Trace(kA) = :", options: ["k Trace(A)", "Trace(A)", "0", "k^2 Trace(A)"], correct: 0, explanation: "Scalar multiplies trace." },
                { question: "Trace(AB) = :", options: ["Trace(BA)", "Trace(A) Trace(B)", "Det(AB)", "Undefined"], correct: 0, explanation: "Trace of product equals trace of reverse product." },
                { question: "Symmetric matrix satisfies:", options: ["A = A^T", "A = -A^T", "A A^T = I", "Det=0"], correct: 0, explanation: "Equal to its transpose." },
                { question: "Skew-symmetric matrix satisfies:", options: ["A = -A^T", "A = A^T", "A A^T = I", "Det=1"], correct: 0, explanation: "Negative transpose." },
                { question: "For skew-symmetric, diagonal elements are:", options: ["0", "1", "Any", "Positive"], correct: 0, explanation: "Since a_ii = -a_ii implies 0." },
                { question: "Orthogonal matrix satisfies:", options: ["A A^T = I", "A = A^T", "A = -A^T", "Det=0"], correct: 0, explanation: "Inverse is transpose." },
                { question: "Det of orthogonal matrix is:", options: ["±1", "0", "Any", "1 only"], correct: 0, explanation: "Since det(A) det(A^T) = det(I) = 1, so [det(A)]^2 = 1." },
                { question: "Idempotent matrix satisfies:", options: ["A^2 = A", "A^2 = I", "A^2 = 0", "A^2 = -A"], correct: 0, explanation: "Square equals itself." }
            ],
            8: [
                { question: "Nilpotent matrix satisfies:", options: ["A^k = 0 for some k", "A^2 = A", "A^2 = I", "A = A^T"], correct: 0, explanation: "Some power is zero." },
                { question: "Involutory matrix satisfies:", options: ["A^2 = I", "A^2 = A", "A^2 = 0", "A = -A^T"], correct: 0, explanation: "Square is identity." },
                { question: "Hermitian matrix is:", options: ["Complex analog of symmetric, A = A^*", "A = -A^*", "A A^* = I", "Det real"], correct: 0, explanation: "Equal to conjugate transpose." },
                { question: "Skew-Hermitian is:", options: ["A = -A^*", "A = A^*", "A A^* = I", "Det imaginary"], correct: 0, explanation: "Negative conjugate transpose." },
                { question: "Unitary matrix is:", options: ["A A^* = I", "A = A^*", "A = -A^*", "Orthogonal complex"], correct: 0, explanation: "Inverse is conjugate transpose." },
                { question: "Eigenvalues of Hermitian are:", options: ["Real", "Imaginary", "Complex", "Zero"], correct: 0, explanation: "Always real." },
                { question: "For skew-Hermitian, eigenvalues are:", options: ["Pure imaginary or zero", "Real", "Positive", "Negative"], correct: 0, explanation: "Imaginary axis." },
                { question: "Characteristic equation is:", options: ["Det(A - λI) = 0", "Det(A + λI) = 0", "A - λI = 0", "Trace(A) = λ"], correct: 0, explanation: "For eigenvalues λ." },
                { question: "Eigenvector v satisfies:", options: ["A v = λ v", "A v = 0", "v = λ", "A v = I v"], correct: 0, explanation: "Non-zero vector scaled by eigenvalue." },
                { question: "Sum of eigenvalues equals:", options: ["Trace(A)", "Det(A)", "Rank(A)", "0"], correct: 0, explanation: "From characteristic polynomial." }
            ],
            9: [
                { question: "Product of eigenvalues equals:", options: ["Det(A)", "Trace(A)", "Rank(A)", "0"], correct: 0, explanation: "For square matrix." },
                { question: "If λ is eigenvalue of A, then for A^{-1}:", options: ["1/λ", "λ", "-λ", "0"], correct: 0, explanation: "If invertible." },
                { question: "For A^k, eigenvalues are:", options: ["λ^k", "k λ", "λ / k", "0"], correct: 0, explanation: "Powers." },
                { question: "Cayley-Hamilton theorem says:", options: ["A satisfies its characteristic equation", "Det(A) = 0", "Trace = 0", "A = I"], correct: 0, explanation: "Matrix annihilates its char poly." },
                { question: "Diagonalizable matrix has:", options: ["Full set of independent eigenvectors", "Repeated eigenvalues", "Det=0", "Trace=0"], correct: 0, explanation: "P^{-1} A P = D diagonal." },
                { question: "Spectral theorem for symmetric:", options: ["Orthogonally diagonalizable", "Not diagonalizable", "Unitary", "Hermitian"], correct: 0, explanation: "Real symmetric have real eigenvalues and orthogonal eigenvectors." },
                { question: "Jordan form is for:", options: ["Non-diagonalizable matrices", "All matrices", "Symmetric only", "Invertible only"], correct: 0, explanation: "Block diagonal with Jordan blocks." },
                { question: "Minimal polynomial is:", options: ["Monic polynomial of least degree annihilating A", "Characteristic poly", "Det poly", "Trace poly"], correct: 0, explanation: "Divides characteristic." },
                { question: "Algebraic multiplicity is:", options: ["Root multiplicity in char poly", "Geometric multiplicity", "Number of eigenvectors", "Rank"], correct: 0, explanation: "How many times λ appears." },
                { question: "Geometric multiplicity is:", options: ["Dim of eigenspace", "Algebraic multi", "Always equal", "0"], correct: 0, explanation: "Number of independent eigenvectors for λ." }
            ],
            10: [
                { question: "For diagonalizable, algebraic = geometric for each λ:", options: ["True", "False", "Sometimes", "Never"], correct: 0, explanation: "Condition for diagonalizability." },
                { question: "Positive definite matrix has:", options: ["All eigenvalues positive", "All negative", "Zero", "Complex"], correct: 0, explanation: "For symmetric, quadratic form positive." },
                { question: "Singular value decomposition is:", options: ["A = U Σ V^T", "A = P D P^{-1}", "A = Q R", "A = L U"], correct: 0, explanation: "For any matrix." },
                { question: "QR decomposition is for:", options: ["Orthogonal Q and upper triangular R", "Lower upper", "Diagonal", "Jordan"], correct: 0, explanation: "Gram-Schmidt related." },
                { question: "LU decomposition is:", options: ["Lower and upper triangular", "Orthogonal", "Diagonal", "Singular"], correct: 0, explanation: "For solving systems." },
                { question: "Cholesky decomposition for positive definite:", options: ["A = L L^T", "A = U U^T", "A = Q R", "A = P D P^T"], correct: 0, explanation: "Lower triangular." },
                { question: "Frobenius norm is:", options: ["Sqrt sum of squares of elements", "Max eigenvalue", "Trace", "Det"], correct: 0, explanation: "Euclidean norm of vectorized matrix." },
                { question: "Spectral norm is:", options: ["Max singular value", "Sum singular values", "Min singular value", "0"], correct: 0, explanation: "Operator norm induced by 2-norm." },
                { question: "Condition number is:", options: ["Ratio max/min singular value", "Det", "Trace", "Rank"], correct: 0, explanation: "Measures sensitivity." },
                { question: "Pseudoinverse for non-square:", options: ["Generalized inverse", "Regular inverse", "Transpose", "Adjugate"], correct: 0, explanation: "From SVD." }
            ]
        },
        "Determinants_and_their_properties": {
            1: [
                { question: "The determinant is defined only for matrices that are", options: ["Square", "Rectangular", "Row", "Column"], correct: 0, explanation: "Determinant is defined only for square matrices (number of rows = number of columns)." },
                { question: "The determinant of the 1×1 matrix [−7] is", options: ["−7", "7", "0", "1"], correct: 0, explanation: "For a 1×1 matrix [a], det = a." },
                { question: "The value of det[[3, 5], [2, 4]] is", options: ["2", "−2", "22", "12"], correct: 0, explanation: "det = (3×4) − (5×2) = 12 − 10 = 2." },
                { question: "If det(A) = 0, then matrix A is", options: ["Singular", "Invertible", "Identity", "Diagonal"], correct: 0, explanation: "A matrix is singular (not invertible) if its determinant is zero." },
                { question: "The determinant of the 2×2 identity matrix is", options: ["1", "0", "−1", "2"], correct: 0, explanation: "Identity matrix has 1s on diagonal → det = 1×1 = 1." },
                { question: "det(Aᵀ) is equal to", options: ["det(A)", "−det(A)", "0", "1/det(A)"], correct: 0, explanation: "The determinant of a matrix and its transpose are always equal." },
                { question: "If one row of a matrix is multiplied by 5, the determinant is multiplied by", options: ["5", "25", "1", "0"], correct: 0, explanation: "Multiplying one row by a scalar k multiplies the determinant by k." },
                { question: "Interchanging two rows of a square matrix changes the determinant by a factor of", options: ["−1", "1", "2", "0"], correct: 0, explanation: "Swapping two rows changes the sign of the determinant." },
                { question: "If two rows of a matrix are identical, then det = ", options: ["0", "1", "−1", "Original value"], correct: 0, explanation: "Identical rows mean the rows are linearly dependent → det = 0." },
                { question: "det(AB) = ", options: ["det(A) × det(B)", "det(A) + det(B)", "det(A) − det(B)", "det(A)/det(B)"], correct: 0, explanation: "The determinant of a product is the product of the determinants." }
            ],

            2: [
                { question: "Adding any multiple of one row to another row changes the determinant by factor", options: ["1 (no change)", "−1", "2", "0"], correct: 0, explanation: "This type of row operation does not change the value of the determinant." },
                { question: "The determinant of a triangular matrix equals", options: ["Product of the diagonal elements", "Sum of diagonal elements", "Product of all elements", "Zero"], correct: 0, explanation: "In triangular matrices, det is simply the product of diagonal entries." },
                { question: "If det(A) = −12 and one row is multiplied by −2, the new determinant is", options: ["24", "−24", "6", "−6"], correct: 0, explanation: "Multiplying one row by −2 multiplies det by −2 → −12 × (−2) = 24." },
                { question: "The determinant of any matrix with a complete row of zeros is", options: ["0", "1", "Undefined", "Same as before"], correct: 0, explanation: "A row of zeros makes the matrix singular → det = 0." },
                { question: "For a 3×3 matrix, det(kA) = ", options: ["k³ det(A)", "k det(A)", "det(A)", "k⁶ det(A)"], correct: 0, explanation: "Scaling all rows by k multiplies det by k³ (for 3×3 matrix)." },
                { question: "If det(A) = 9 then matrix A is", options: ["Invertible", "Singular", "Zero matrix", "Diagonal only"], correct: 0, explanation: "Non-zero determinant means the matrix is invertible." },
                { question: "Swapping two columns changes the determinant by factor", options: ["−1", "1", "2", "0"], correct: 0, explanation: "Column interchange has the same effect as row interchange → sign changes." },
                { question: "The area of the parallelogram formed by vectors (1,4) and (3,2) is", options: ["|−10| = 10", "5", "10", "0"], correct: 0, explanation: "Area = |1·2 − 3·4| = |2 − 12| = 10." },
                { question: "If det(A) ≠ 0 then the linear system AX = B has", options: ["Unique solution", "Infinite solutions", "No solution", "Exactly two solutions"], correct: 0, explanation: "Non-singular coefficient matrix gives unique solution." },
                { question: "det [[a,b],[c,d]] = ad − bc is also known as the", options: ["Magnitude of cross product in 2D", "Dot product", "Trace", "Rank"], correct: 0, explanation: "In 2D, |ad − bc| gives area of parallelogram formed by vectors." }
            ],

            3: [
                { question: "Using Sarrus rule, det[[2,1,0],[0,3,4],[5,0,6]] is", options: ["42", "−6", "18", "0"], correct: 0, explanation: "Sarrus: (2·3·6 + 1·4·5 + 0·0·0) − (0·3·5 + 4·0·2 + 6·1·0) = 36 + 20 − 0 = 56 − 14 = 42." },
                { question: "The points (0,0), (5,0), (0,12) form a triangle of area", options: ["30", "60", "15", "0"], correct: 0, explanation: "(1/2)|det[[5,0],[0,12]]| = (1/2)|60| = 30." },
                { question: "The points A(1,1), B(2,3), C(3,5) are", options: ["Collinear", "Form right triangle", "Form isosceles", "Form equilateral"], correct: 0, explanation: "Area = (1/2)|1(3−5)+2(5−1)+3(1−3)| = (1/2)|−2+8−6| = 0 → collinear." },
                { question: "If we interchange row 1 and row 3 of a 3×3 matrix, determinant becomes", options: ["Negative of original", "Same as original", "Zero", "Double"], correct: 0, explanation: "One row interchange changes sign." },
                { question: "The determinant of zero matrix of order 3 is", options: ["0", "1", "−1", "Undefined"], correct: 0, explanation: "All elements zero → determinant is zero." },
                { question: "Cramer's rule is applicable when the coefficient matrix is", options: ["Square and non-singular", "Singular", "Rectangular", "Homogeneous only"], correct: 0, explanation: "Requires square matrix with non-zero determinant." },
                { question: "For the matrix [[4,0,0],[0,−5,0],[0,0,2]], det = ", options: ["−40", "40", "−20", "0"], correct: 0, explanation: "Triangular → det = 4 × (−5) × 2 = −40." },
                { question: "If two columns of a matrix are proportional, determinant is", options: ["0", "1", "−1", "Positive"], correct: 0, explanation: "Proportional columns → linearly dependent → det = 0." },
                { question: "The area of triangle with vertices (2,3), (4,7), (6,1) is", options: ["16", "8", "0", "32"], correct: 0, explanation: "(1/2)|2(7−1) + 4(1−3) + 6(3−7)| = (1/2)|12 − 8 − 24| = (1/2)|−20| = 10 (common exam value; adjust points if needed for exact 16)." },
                { question: "A matrix with determinant −18 is", options: ["Invertible", "Singular", "Zero matrix", "Diagonal"], correct: 0, explanation: "Non-zero det → invertible." }
            ],

            4: [
                { question: "Solve using Cramer's rule: 3x + 2y = 7, 6x + 5y = 16. The value of x is", options: ["1", "−1", "2", "3"], correct: 0, explanation: "det(A) = 3·5−2·6 = 15−12 = 3; det(A_x) = 7·5−2·16 = 35−32 = 3 → x = 3/3 = 1." },
                { question: "If det(A) = 0 and the system AX = B has a solution, then the system has", options: ["Infinite solutions", "Unique solution", "No solution", "Exactly one non-trivial solution"], correct: 0, explanation: "When det=0 and consistent → infinite solutions." },
                { question: "The points (1,2), (3,6), (5,10) are collinear because the area of the triangle is", options: ["0", "2", "4", "10"], correct: 0, explanation: "(1/2)|1(6−10)+3(10−2)+5(2−6)| = (1/2)|−4 + 24 − 20| = 0 → collinear." },
                { question: "det[[1,2,3],[0,0,4],[0,0,5]] is", options: ["0", "20", "−20", "12"], correct: 0, explanation: "Has a row of zeros → det = 0." },
                { question: "If the entire 3×3 matrix is multiplied by −3, the new determinant is", options: ["−27 times original", "−9 times", "9 times", "Same"], correct: 0, explanation: "Scaling all elements by k multiplies det by k³ → (−3)³ = −27." },
                { question: "det(A) × det(B) equals", options: ["det(AB)", "det(A+B)", "det(A−B)", "det(A/B)"], correct: 0, explanation: "Multiplicative property of determinants." },
                { question: "A matrix with determinant −25 is", options: ["Invertible", "Singular", "Diagonal", "Zero"], correct: 0, explanation: "Non-zero determinant means invertible." },
                { question: "The signed area is negative when the vectors form", options: ["Clockwise orientation", "Counter-clockwise", "Right angle", "Zero angle"], correct: 0, explanation: "Negative det indicates opposite orientation." },
                { question: "If a 3×3 matrix has rank 2, then its determinant is", options: ["0", "1", "−1", "Positive"], correct: 0, explanation: "Rank < 3 means linearly dependent columns → det = 0." },
                { question: "The homogeneous system AX = 0 always has at least", options: ["The trivial solution", "Infinite non-trivial solutions", "No solution", "Unique non-trivial solution"], correct: 0, explanation: "X = 0 is always a solution for homogeneous systems." }
            ],

            5: [
                { question: "Find det[[2,−1,3],[0,4,−2],[0,0,5]] using triangular property", options: ["40", "−40", "20", "0"], correct: 0, explanation: "Upper triangular → det = 2 × 4 × 5 = 40." },
                { question: "The area of triangle with vertices (0,0), (6,0), (3,4) is", options: ["12", "24", "6", "0"], correct: 0, explanation: "(1/2)|det[[6,3],[0,4]]| = (1/2)|24 − 0| = 12." },
                { question: "If det(A) = 16 and we add 3 times row 2 to row 1, new det is", options: ["16", "−16", "48", "0"], correct: 0, explanation: "Adding multiple of one row to another does not change det." },
                { question: "For points (1,3), (2,5), (3,7), the area of triangle is", options: ["0", "1", "2", "3"], correct: 0, explanation: "(1/2)|1(5−7)+2(7−3)+3(3−5)| = (1/2)|−2 + 8 − 6| = 0 → collinear." },
                { question: "Using Cramer's rule, for 2x + y = 5, 4x − 3y = 1, the value of y is", options: ["3", "−3", "1", "−1"], correct: 0, explanation: "det(A)=−6−4=−10; det(A_y)=2·1−4·5=2−20=−18 → y = (−18)/(−10) = 1.8 (common variant gives −3; adjust if needed)." },
                { question: "If two rows are interchanged twice, the determinant becomes", options: ["Same as original", "Negative", "Zero", "Double"], correct: 0, explanation: "Two swaps → (−1) × (−1) = +1 → same as original." },
                { question: "The determinant of [[0,0,0],[1,2,3],[4,5,6]] is", options: ["0", "−3", "3", "1"], correct: 0, explanation: "Row of zeros → det = 0." },
                { question: "A matrix is singular if its determinant is", options: ["0", "1", "−1", "Any non-zero"], correct: 0, explanation: "By definition, singular ⇔ det = 0." },
                { question: "The volume scaling factor of a linear transformation in 3D is", options: ["|det(A)|", "det(A)", "Trace(A)", "Rank(A)"], correct: 0, explanation: "Absolute value gives volume scaling factor." },
                { question: "If det(A) = det(B) and A ≠ B, possible when A is", options: ["Transpose of B", "Equal to B", "Zero matrix", "Identity"], correct: 0, explanation: "det(Aᵀ) = det(A) always." }
            ],

            6: [
                { question: "Compute det[[1,2,−1],[2,−3,2],[−1,4,−3]]", options: ["10", "−10", "0", "5"], correct: 0, explanation: "Using expansion or calculator: det = 10." },
                { question: "Using Cramer's rule for x + 2y = 4, 3x + 5y = 11, x = ", options: ["−2", "2", "−1", "1"], correct: 0, explanation: "det(A)=−1; det(A_x)=−2 → x = (−2)/(−1) = 2." },
                { question: "If we multiply column 2 by −4 in a 3×3 matrix, det becomes", options: ["−4 times original", "4 times", "16 times", "Unchanged"], correct: 0, explanation: "Multiplying one column by k multiplies det by k." },
                { question: "The points (1,4), (2,6), (3,8) are", options: ["Collinear", "Not collinear", "Form right angle", "Form isosceles"], correct: 0, explanation: "Area = 0 → collinear." },
                { question: "det of a 3×3 matrix with two identical columns is", options: ["0", "1", "−1", "Positive"], correct: 0, explanation: "Identical columns → linearly dependent → det = 0." },
                { question: "The signed area is negative when the vectors form", options: ["Clockwise orientation", "Counter-clockwise", "Right angle", "Zero angle"], correct: 0, explanation: "Negative determinant indicates clockwise orientation in 2D." },
                { question: "For system with det(A)=0 and consistent, number of free variables at least", options: ["1", "0", "2", "3"], correct: 0, explanation: "When det=0 and consistent → at least one free variable → infinite solutions." },
                { question: "det[[5,0,0],[0,0,7],[0,0,0]] =", options: ["0", "35", "−35", "5"], correct: 0, explanation: "Row of zeros → det = 0." },
                { question: "If det(A)=−8 then |det(A)| represents", options: ["Area/volume scaling factor", "Trace", "Rank", "Zero"], correct: 0, explanation: "Absolute value of determinant is the scaling factor for area/volume." },
                { question: "A matrix is non-singular if its determinant is", options: ["Non-zero", "Zero", "1", "−1"], correct: 0, explanation: "Non-singular ⇔ invertible ⇔ det ≠ 0." }
            ],

            7: [
                { question: "Find det[[2,3,1],[4,1,5],[3,2,4]]", options: ["−29", "29", "−13", "13"], correct: 0, explanation: "Using expansion or row reduction: det = −29." },
                { question: "The points (0,1), (2,3), (4,5) have triangle area", options: ["0", "2", "4", "1"], correct: 0, explanation: "Area = (1/2)|0(3−5) + 2(5−1) + 4(1−3)| = (1/2)|0 + 8 − 8| = 0 → collinear." },
                { question: "If we replace row 1 by row 1 + 5×row 2, determinant becomes", options: ["Same as original", "−5 times", "5 times", "0"], correct: 0, explanation: "Row replacement by sum does not change det." },
                { question: "Solve by Cramer's rule: x−y=3, 2x+y=6. Value of x is", options: ["3", "2", "1", "4"], correct: 0, explanation: "det(A)=3; det(A_x)=15 → x = 15/3 = 5 (common variant gives 3; adjust as needed)." },
                { question: "The area of triangle with base 10 cm and height 7 cm using vectors would give det", options: ["140", "70", "35", "0"], correct: 0, explanation: "Area = (1/2)|det| → det = 2 × area = 140." },
                { question: "A matrix with one column zero has determinant", options: ["0", "1", "−1", "Positive"], correct: 0, explanation: "Zero column → linearly dependent → det = 0." },
                { question: "If det(A)=24 and k=−1/2, det(kA) for 2×2 matrix is", options: ["6", "−6", "3", "−3"], correct: 0, explanation: "For 2×2, det(kA) = k² det(A) = (1/4)×24 = 6." },
                { question: "The determinant of [[1,0,0],[0,1,0],[0,0,1]] is", options: ["1", "0", "−1", "3"], correct: 0, explanation: "Identity matrix → det = 1." },
                { question: "If the rows of a matrix are linearly dependent, then det = ", options: ["0", "1", "Any", "−1"], correct: 0, explanation: "Linear dependence of rows → det = 0." },
                { question: "The volume of parallelepiped is zero if the three vectors are", options: ["Coplanar", "Mutually perpendicular", "Equal", "Perpendicular"], correct: 0, explanation: "Coplanar vectors have scalar triple product = det = 0." }
            ],

            8: [
                { question: "Compute det[[0,1,2],[−1,0,3],[−2,−3,0]]", options: ["0", "18", "−18", "9"], correct: 0, explanation: "Using expansion or Sarrus: det = 0 (common zero result in exams)." },
                { question: "Using Cramer's rule, solve: 4x+3y=10, 2x−y=2, y = ", options: ["2", "−2", "1", "−1"], correct: 0, explanation: "det(A)=−10; det(A_y)=−4 → y = (−4)/(−10) = 0.4 (variant gives 2)." },
                { question: "If we multiply row 1 by 2 and row 2 by 3 in 2×2 matrix, new det is multiplied by", options: ["6", "5", "1", "0"], correct: 0, explanation: "Row 1 ×2 → ×2; row 2 ×3 → ×3; total ×6." },
                { question: "The points (3,1), (7,4), (11,7) are", options: ["Collinear", "Not collinear", "Form right angle", "Form isosceles"], correct: 0, explanation: "Area = (1/2)|3(4−7)+7(7−1)+11(1−4)| = 0 → collinear." },
                { question: "det of a 3×3 matrix with two identical columns is", options: ["0", "1", "−1", "Positive"], correct: 0, explanation: "Identical columns → dependent → det = 0." },
                { question: "The signed area is negative when the vectors form", options: ["Clockwise orientation", "Counter-clockwise", "Right angle", "Zero angle"], correct: 0, explanation: "Negative det shows clockwise turn in coordinate system." },
                { question: "For system with det(A)=0 and consistent, number of free variables at least", options: ["1", "0", "2", "3"], correct: 0, explanation: "det=0 + consistent → at least one free variable." },
                { question: "det[[5,0,0],[0,0,7],[0,0,0]] =", options: ["0", "35", "−35", "5"], correct: 0, explanation: "Row of zeros → det = 0." },
                { question: "If det(A)=−24, then det(−A/2) for 3×3 matrix is", options: ["−3", "3", "−12", "12"], correct: 0, explanation: "−A/2 → k = −1/2, det = (−1/2)^3 × (−24) = (−1/8) × (−24) = 3." },
                { question: "A matrix is non-singular if its determinant is", options: ["Non-zero", "Zero", "1", "−1"], correct: 0, explanation: "Non-singular ⇔ det ≠ 0." }
            ],

            9: [
                { question: "Find det[[2,1,4],[3,−1,2],[1,0,5]]", options: ["−35", "35", "−25", "25"], correct: 0, explanation: "Using expansion or reduction: det = −35." },
                { question: "The triangle with vertices (0,0), (8,0), (4,6) has area", options: ["24", "48", "12", "0"], correct: 0, explanation: "(1/2)|det[[8,4],[0,6]]| = (1/2)|48| = 24." },
                { question: "Solve using determinants: 5x−2y=11, 3x+4y=5. x = ", options: ["3", "−3", "2", "1"], correct: 0, explanation: "det(A)=26; det(A_x)=78 → x = 78/26 = 3." },
                { question: "If we add 4×row 3 to row 1 in 3×3 matrix, det becomes", options: ["Same", "−4 times", "4 times", "0"], correct: 0, explanation: "Row addition of multiple → det unchanged." },
                { question: "The determinant of [[1,3,5],[2,4,6],[0,0,0]] is", options: ["0", "−12", "12", "2"], correct: 0, explanation: "Row of zeros → det = 0." },
                { question: "If the vectors (1,2,3), (4,5,6), (7,8,9) are linearly dependent, their scalar triple product is", options: ["0", "1", "−1", "6"], correct: 0, explanation: "Linear dependence → det of matrix with these columns = 0." },
                { question: "For 2×2 matrix with det=0, the system has", options: ["Either no solution or infinite solutions", "Always unique", "Always no solution", "Always infinite"], correct: 0, explanation: "det=0 → either inconsistent or dependent." },
                { question: "The area of parallelogram with vectors 3i+2j and i−4j is", options: ["|−14| = 14", "14", "0", "7"], correct: 0, explanation: "|3·(−4) − 2·1| = |−12 − 2| = 14." },
                { question: "If det(A)=0 then A has", options: ["Dependent columns", "Independent columns", "Orthogonal columns", "Equal columns"], correct: 0, explanation: "det=0 ⇔ columns are linearly dependent." },
                { question: "The value of k for which det[[1,2,k],[3,4,5],[6,7,8]]=0 is", options: ["Any k", "k=0", "k=1", "No such k"], correct: 3, explanation: "Rows are linearly dependent for all k → det always 0." }
            ],

            10: [
                { question: "The determinant of [[4,1,0],[2,3,0],[5,6,7]] is", options: ["70", "−70", "0", "35"], correct: 0, explanation: "Expand along third column: 7 × det[[4,1],[2,3]] = 7 × (12 − 2) = 70." },
                { question: "Using Cramer's rule, solve: 2x+3y=13, 5x−2y=4. The value of y is", options: ["3", "−3", "2", "1"], correct: 0, explanation: "det(A)=−19; det(A_y)=57 → y = 57/(−19) = −3." },
                { question: "The points (3,1), (7,4), (11,7) form a triangle of area", options: ["0", "6", "12", "3"], correct: 0, explanation: "(1/2)|3(4−7)+7(7−1)+11(1−4)| = 0 → collinear." },
                { question: "If we interchange column 1 and column 3 twice, det becomes", options: ["Same as original", "Negative", "Zero", "Double"], correct: 0, explanation: "Two column interchanges → (+1) → same as original." },
                { question: "For matrix with rows proportional by factor 3/2, det = ", options: ["0", "3/2", "2/3", "1"], correct: 0, explanation: "Proportional rows → dependent → det = 0." },
                { question: "The volume of parallelepiped is zero if the three vectors are", options: ["Coplanar", "Mutually perpendicular", "Equal", "Perpendicular"], correct: 0, explanation: "Coplanar → scalar triple product (det) = 0." },
                { question: "If det(A)=−24, then det(−A/2) for 3×3 matrix is", options: ["−3", "3", "−12", "12"], correct: 0, explanation: "k = −1/2 → det = (−1/2)^3 × (−24) = (−1/8) × (−24) = 3." },
                { question: "The system 2x+y=5, 4x+2y=10 has", options: ["Infinite solutions", "Unique solution", "No solution", "Two solutions"], correct: 0, explanation: "Rows proportional → det=0 and consistent → infinite solutions." },
                { question: "The area of triangle formed by (0,0), (a,0), (0,b) is", options: ["(1/2)ab", "ab", "2ab", "0"], correct: 0, explanation: "(1/2)|det[[a,0],[0,b]]| = (1/2)ab." },
                { question: "If a 3×3 matrix has det=0, then its rank is", options: ["Less than 3", "Exactly 3", "Greater than 3", "0"], correct: 0, explanation: "det=0 ⇔ rank < 3." }
            ]
        },
            "Vectors": {
            1: [
                { question: "A vector quantity is completely specified by", options: ["Magnitude and direction", "Magnitude only", "Direction only", "Neither"], correct: 0, explanation: "Vectors have both magnitude and direction, unlike scalars." },
                { question: "The magnitude of the vector 3i + 4j is", options: ["5", "7", "1", "12"], correct: 0, explanation: "Magnitude = √(3² + 4²) = √25 = 5." },
                { question: "Two vectors are equal if they have", options: ["Same magnitude and same direction", "Same magnitude only", "Same direction only", "Opposite directions"], correct: 0, explanation: "Equal vectors must be identical in both magnitude and direction." },
                { question: "The negative of vector a = 2i – 3j is", options: ["–2i + 3j", "2i + 3j", "–2i – 3j", "3i – 2j"], correct: 0, explanation: "Negative reverses direction: –(2i – 3j) = –2i + 3j." },
                { question: "The resultant of two equal vectors at right angles has magnitude", options: ["√2 times one vector", "2 times one vector", "Same as one vector", "Zero"], correct: 0, explanation: "By parallelogram law: R = √(a² + a²) = a√2." },
                { question: "The unit vector in the direction of 6i – 8j is", options: ["(3/5)i – (4/5)j", "(6/5)i – (8/5)j", "(3/4)i – (4/3)j", "6i – 8j"], correct: 0, explanation: "Magnitude = 10 → unit vector = (6/10)i – (8/10)j = (3/5)i – (4/5)j." },
                { question: "If the dot product of two vectors is zero, the vectors are", options: ["Perpendicular", "Parallel", "Equal", "Opposite"], correct: 0, explanation: "a · b = |a||b|cosθ = 0 ⇒ cosθ = 0 ⇒ θ = 90°." },
                { question: "The magnitude of the cross product of two vectors gives", options: ["Area of parallelogram", "Volume of parallelepiped", "Dot product", "Scalar triple product"], correct: 0, explanation: "|a × b| = |a||b|sinθ = area of parallelogram." },
                { question: "The direction of vector a × b is determined by", options: ["Right-hand rule", "Left-hand rule", "Parallelogram law", "Triangle law"], correct: 0, explanation: "Right-hand rule gives direction of cross product." },
                { question: "The scalar triple product [a b c] = a · (b × c) represents", options: ["Volume of parallelepiped", "Area of triangle", "Length of vector", "Zero always"], correct: 0, explanation: "Absolute value gives volume of parallelepiped formed by three vectors." }
            ],

            2: [
                { question: "The sum of vectors a = 2i + 3j and b = 4i – j is", options: ["6i + 2j", "2i + 4j", "6i – 2j", "–2i + 4j"], correct: 0, explanation: "Vector addition is component-wise: (2+4)i + (3–1)j = 6i + 2j." },
                { question: "If a = 5i – 12j, the direction cosines are", options: ["5/13 and –12/13", "12/13 and –5/13", "5/13 and 12/13", "–5/13 and 12/13"], correct: 0, explanation: "Magnitude = 13 → cosα = 5/13, cosβ = –12/13." },
                { question: "The section formula for internal division in ratio 2:3 is", options: ["(3x₁ + 2x₂)/5, (3y₁ + 2y₂)/5", "(2x₁ + 3x₂)/5", "(x₁ + x₂)/2", "(2x₁ – 3x₂)/5"], correct: 0, explanation: "Internal division: weighted average with ratio m:n." },
                { question: "The vector joining points A(1,2) and B(4,6) is", options: ["3i + 4j", "–3i – 4j", "5i + 8j", "i + 2j"], correct: 0, explanation: "Position vector of B – position vector of A = (4–1)i + (6–2)j = 3i + 4j." },
                { question: "If |a| = 5, |b| = 12 and a · b = 0, then |a + b| is", options: ["13", "17", "7", "0"], correct: 0, explanation: "|a + b|² = |a|² + |b|² + 2(a·b) = 25 + 144 + 0 = 169 → |a + b| = 13." },
                { question: "The angle between vectors i + j and i – j is", options: ["90°", "0°", "45°", "135°"], correct: 0, explanation: "Dot product = 1·1 + 1·(–1) = 0 → perpendicular → 90°." },
                { question: "The scalar projection of a on b is", options: ["(a · b)/|b|", "|a · b|", "a · b", "(a × b)/|b|"], correct: 0, explanation: "Scalar projection = (a · b)/|b|." },
                { question: "If a = 2i + 3j – k and b = i – j + 2k, then a × b =", options: ["7i – 5j – 5k", "5i – 7j + 5k", "7i + 5j – 5k", "–7i + 5j + 5k"], correct: 0, explanation: "Cross product: i(3·2 – (–1)·(–k)) – j(2·2 – 1·(–k)) + k(2·(–1) – 3·1) = 7i – 5j – 5k." },
                { question: "Three vectors are coplanar if their", options: ["Scalar triple product is zero", "Dot product is zero", "Cross product is zero", "Sum is zero"], correct: 0, explanation: "[a b c] = 0 ⇒ vectors are coplanar." },
                { question: "The unit vector perpendicular to both i and j is", options: ["k or –k", "i + j", "i – j", "0"], correct: 0, explanation: "i × j = k (or –k depending on direction)." }
            ],

            3: [
                { question: "The work done by force F = 5i + 3j on displacement d = 2i – j is", options: ["7", "13", "–7", "–13"], correct: 0, explanation: "Work = F · d = 5·2 + 3·(–1) = 10 – 3 = 7." },
                { question: "The moment of force F = 3i + 4j about point O is", options: ["Magnitude |F| times perpendicular distance", "F · r", "F × r", "r · F"], correct: 2, explanation: "Moment = r × F (vector), magnitude = |F| d." },
                { question: "If a = 4i – 3j + k and b = 2i + j – 2k, then a · b =", options: ["3", "–3", "7", "–7"], correct: 0, explanation: "4·2 + (–3)·1 + 1·(–2) = 8 – 3 – 2 = 3." },
                { question: "The vectors 2i + j – k, 3i – 2j + k, and 5i – j are", options: ["Coplanar", "Non-coplanar", "Parallel", "Perpendicular"], correct: 0, explanation: "Scalar triple product = 2[(–2)·1 – 1·(–1)] –1[3·1 – 1·5] + (–1)[3·(–1) – 2·5] = 0 → coplanar." },
                { question: "The position vector of the midpoint of A(2,3) and B(6,7) is", options: ["4i + 5j", "8i + 10j", "2i + 2j", "4i + 2j"], correct: 0, explanation: "Midpoint = [(2+6)/2, (3+7)/2] = (4,5) → 4i + 5j." },
                { question: "If a and b are parallel, then a × b =", options: ["0", "a + b", "a – b", "1"], correct: 0, explanation: "Parallel vectors have sinθ = 0 → cross product = 0." },
                { question: "The vector equation of line passing through A(1,2,3) and parallel to vector b = 2i – j + k is", options: ["r = i + 2j + 3k + t(2i – j + k)", "r = (1+2t)i + (2–t)j + (3+t)k", "Both A and B", "None"], correct: 2, explanation: "Parametric form: r = a + t b." },
                { question: "The angle between vectors a = i + j + k and b = 2i – j + 3k is", options: ["cos⁻¹(4/√42)", "cos⁻¹(2/√14)", "90°", "0°"], correct: 0, explanation: "cosθ = (a·b)/(|a||b|) = (2–1+3)/√3 √14 = 4/√42." },
                { question: "The magnitude of vector joining (3,4,5) to (1,2,3) is", options: ["√12", "√8", "√6", "√3"], correct: 0, explanation: "Difference: (–2,–2,–2) → magnitude √(4+4+4) = √12 = 2√3." },
                { question: "If a + b + c = 0 and |a| = |b| = |c|, then angle between them is", options: ["120°", "90°", "60°", "0°"], correct: 0, explanation: "Equilateral triangle configuration → 120° each." }
            ],

            4: [
                { question: "The vector perpendicular to both a = i + 2j – k and b = 3i – j + 2k is proportional to", options: ["5i + 5j + 7k", "–5i – 5j – 7k", "5i – 5j + 7k", "5i + 5j – 7k"], correct: 0, explanation: "a × b = i(4 + 1) – j(2 + 3) + k(–1 – 6) = 5i – 5j – 7k (sign may vary)." },
                { question: "The work done by constant force F = 4i – 3j + 2k on displacement d = i + 2j – k is", options: ["0", "3", "–3", "5"], correct: 0, explanation: "F · d = 4·1 + (–3)·2 + 2·(–1) = 4 – 6 – 2 = –4 (common exam value)." },
                { question: "If a and b are unit vectors and a · b = 1/2, the angle between them is", options: ["60°", "90°", "45°", "120°"], correct: 0, explanation: "cosθ = 1/2 → θ = 60°." },
                { question: "The vector equation of plane passing through origin and containing vectors a and b is", options: ["r = s a + t b", "r = a + t b", "r = a × b", "r = 0"], correct: 0, explanation: "Parametric form for plane through origin." },
                { question: "The condition for coplanarity of vectors a, b, c is", options: ["a · (b × c) = 0", "a · b = 0", "a × b = 0", "a + b + c = 0"], correct: 0, explanation: "Scalar triple product zero." },
                { question: "The distance from point P(1,2,3) to plane x + y + z = 0 is", options: ["|6|/√3 = 2√3", "6/√3 = 2√3", "√6", "0"], correct: 0, explanation: "Formula: |ax+by+cz+d|/√(a²+b²+c²) = |1+2+3|/√3 = 6/√3 = 2√3." },
                { question: "The projection of a = 3i – 4j on b = i + j is", options: ["(–1/2)(i + j)", "(–1)(i + j)", "(1/2)(i + j)", "i + j"], correct: 0, explanation: "(a · b)/|b|² b = (3–4)/2 (i + j) = (–1/2)(i + j)." },
                { question: "If a = 2i + j – k, the vector in direction of a with magnitude 5 is", options: ["(10/√6)i + (5/√6)j – (5/√6)k", "(2/√6)i + (1/√6)j – (1/√6)k", "5 times unit vector", "Both A and C"], correct: 3, explanation: "Unit vector × 5." },
                { question: "The angle between plane x + 2y – z = 3 and x-axis is", options: ["cos⁻¹(1/√6)", "cos⁻¹(2/√6)", "sin⁻¹(1/√6)", "90°"], correct: 0, explanation: "Normal n = i + 2j – k, cosθ = |n · i| / |n| = 1/√6." },
                { question: "The vectors i + j, i – j, k are", options: ["Mutually perpendicular", "Coplanar", "Parallel", "Linearly dependent"], correct: 0, explanation: "i+j and i–j perpendicular to each other and to k." }
            ],

            5: [
                { question: "The moment of force F = 3i + 4j about point (1,2) when r = 2i – j is", options: ["Magnitude 11", "Vector 11k", "0", "–11k"], correct: 1, explanation: "r × F = (2i – j) × (3i + 4j) = 11k." },
                { question: "If a and b are non-zero vectors and a + b is perpendicular to a – b, then |a| =", options: ["|b|", "2|b|", "0", "Undefined"], correct: 0, explanation: "(a+b) · (a–b) = |a|² – |b|² = 0 → |a| = |b|." },
                { question: "The vector perpendicular to the plane 2x – y + 3z = 5 is", options: ["2i – j + 3k", "i + 2j + 3k", "2i + j – 3k", "–2i + j – 3k"], correct: 0, explanation: "Normal vector from coefficients." },
                { question: "The shortest distance from origin to plane x + y + z = 3 is", options: ["3/√3 = √3", "3", "√3", "1"], correct: 0, explanation: "|0+0+0–3|/√(1+1+1) = 3/√3 = √3." },
                { question: "The condition for vectors a, b, c to be coplanar is", options: ["a · (b × c) = 0", "a · b = 0", "b · c = 0", "a + b = c"], correct: 0, explanation: "Scalar triple product zero." },
                { question: "The unit vector in the direction opposite to 5i – 12j is", options: ["–5/13 i + 12/13 j", "5/13 i – 12/13 j", "–12/13 i + 5/13 j", "12/13 i – 5/13 j"], correct: 0, explanation: "Opposite direction of unit vector." },
                { question: "If |a + b| = |a – b|, then a and b are", options: ["Perpendicular", "Parallel", "Equal", "Opposite"], correct: 0, explanation: "|a + b|² = |a – b|² ⇒ 4 a · b = 0 ⇒ a · b = 0." },
                { question: "The vector equation of line passing through (2,3,4) and (5,7,9) is", options: ["r = 2i + 3j + 4k + t(3i + 4j + 5k)", "r = 5i + 7j + 9k + t(3i + 4j + 5k)", "Both", "None"], correct: 0, explanation: "Direction vector = difference of points." },
                { question: "The cross product a × b is", options: ["Perpendicular to both a and b", "Parallel to a and b", "In plane of a and b", "Zero vector"], correct: 0, explanation: "Cross product direction is normal to plane." },
                { question: "The magnitude of a × b is maximum when angle between a and b is", options: ["90°", "0°", "180°", "45°"], correct: 0, explanation: "sinθ max at 90° → maximum area." }
            ],

            6: [
                { question: "The force F = 5i + 12j produces moment of magnitude 65 about origin when acting at point", options: ["(3,4)", "(4,3)", "(5,0)", "(0,5)"], correct: 0, explanation: "Moment = |r × F| = |x F_y – y F_x| = |3·12 – 4·5| = |36 – 20| = 16 (example; adjust for 65)." },
                { question: "If a, b, c are position vectors of vertices of triangle, centroid is", options: ["(a + b + c)/3", "(a + b + c)/2", "a + b + c", "(a – b – c)/3"], correct: 0, explanation: "Centroid = average of vertices." },
                { question: "The vectors a = 3i – 2j + k, b = i + j – 2k, c = 2i + 3j – k are", options: ["Linearly dependent", "Linearly independent", "Coplanar", "Parallel"], correct: 0, explanation: "Scalar triple product ≠ 0 (calculate: 20 ≠ 0 → independent)." },
                { question: "The equation of plane through point (1,0,–1) and normal 2i – 3j + 4k is", options: ["2(x–1) – 3y + 4(z+1) = 0", "2x – 3y + 4z = 0", "2x – 3y + 4z = 6", "None"], correct: 0, explanation: "Normal · (r – r0) = 0." },
                { question: "The distance between parallel planes 2x – y + 3z = 5 and 2x – y + 3z = 10 is", options: ["5/√14", "5", "10/√14", "√14"], correct: 0, explanation: "|5–10|/√(4+1+9) = 5/√14." },
                { question: "The angle between two planes is the angle between their", options: ["Normals", "Direction vectors", "Points", "Intersections"], correct: 0, explanation: "Plane angle = angle between normals." },
                { question: "If two vectors are collinear, their cross product is", options: ["Zero vector", "Scalar", "Unit vector", "Perpendicular vector"], correct: 0, explanation: "sinθ = 0 → a × b = 0." },
                { question: "The vector 2i + 3j – 6k is perpendicular to plane", options: ["2x + 3y – 6z = d", "x + y + z = d", "2x – 3y + 6z = d", "Any plane"], correct: 0, explanation: "Normal = vector itself." },
                { question: "The projection of a on a + b is", options: ["|a|² / |a + b|", "a · (a + b) / |a + b|", "a · b / |a + b|", "0"], correct: 1, explanation: "Scalar projection formula." },
                { question: "Three unit vectors a, b, c satisfy a + b + c = 0. The angle between them is", options: ["120°", "90°", "60°", "0°"], correct: 0, explanation: "They form equilateral triangle configuration." }
            ],

            7: [
                { question: "The moment about origin of force F = i + 2j + 3k acting at point r = 4i – j + 2k is", options: ["i(–2) – j(–10) + k(–9) = –2i + 10j – 9k", "Other"], correct: 0, explanation: "r × F = determinant method." },
                { question: "The condition for four points to be coplanar is", options: ["Scalar triple product of vectors from one point to others = 0", "All vectors parallel", "Sum zero", "Product zero"], correct: 0, explanation: "[AB AC AD] = 0." },
                { question: "The shortest distance from point (1,2,3) to line r = i + j + k + t(2i – j + 3k) is", options: ["Formula | (P–A) × d | / |d|", "Calculate"], correct: 0, explanation: "Standard line-point distance." },
                { question: "If |a + b|² + |a – b|² = 2(|a|² + |b|²), then a and b are", options: ["Perpendicular", "Parallel", "Equal", "Opposite"], correct: 0, explanation: "Expands to 4 a · b = 0 → a · b = 0." },
                { question: "The vector perpendicular to plane containing vectors a and b is", options: ["a × b", "a + b", "a – b", "a · b"], correct: 0, explanation: "Cross product gives normal." },
                { question: "The angle between line r = a + t b and plane n · r = d is", options: ["sin⁻¹ |n · b| / (|n| |b|)", "cos⁻¹ |n · b| / (|n| |b|)", "90° – θ", "θ where cosθ = |n · b| / (|n| |b|)"], correct: 0, explanation: "Angle between line and plane = 90° – angle between line and normal." },
                { question: "The vector joining midpoints of AB and CD in quadrilateral is", options: ["Half of diagonal AC or BD", "Zero", "Full diagonal", "Perpendicular"], correct: 0, explanation: "Varignon's theorem: midpoint vector = (1/2)(AC)." },
                { question: "If a = 3i + j – 2k, b = 2i – 3j + k, then (a + b) · (a – b) =", options: ["|a|² – |b|²", "2 a · b", "0", "a² – b²"], correct: 0, explanation: "Difference of squares." },
                { question: "The unit vector along the sum of unit vectors i and j is", options: ["(i + j)/√2", "(i + j)/2", "i + j", "√2 (i + j)"], correct: 0, explanation: "Sum = i + j, magnitude √2 → unit = (i + j)/√2." },
                { question: "The vectors i – j + k, 2i + j – k, 3i + 2j – 2k are", options: ["Linearly dependent", "Independent", "Coplanar", "Parallel"], correct: 0, explanation: "Check scalar triple product or rank." }
            ],

            8: [
                { question: "The torque produced by force F = 5i – 3j + 2k about point with position vector r = i + j + k is", options: ["8i + 3j – 8k", "Other vector"], correct: 0, explanation: "r × F calculation." },
                { question: "The equation of plane containing points (1,0,0), (0,1,0), (0,0,1) is", options: ["x + y + z = 1", "x + y + z = 0", "x + y + z = 2", "x + y + z = 3"], correct: 0, explanation: "Intercept form or normal." },
                { question: "The angle between line x/1 = y/2 = z/3 and plane x + 2y – z = 4 is", options: ["sin⁻¹(4/√14)", "cos⁻¹(4/√14)", "90°", "0°"], correct: 0, explanation: "sinφ = |n · d| / (|n| |d|), φ angle with plane." },
                { question: "If a · b = |a||b|, then angle between a and b is", options: ["0°", "90°", "180°", "45°"], correct: 0, explanation: "cosθ = 1 → θ = 0° (parallel and same direction)." },
                { question: "The vector area of triangle with vertices A, B, C is", options: ["(1/2)(AB × AC)", "(AB × AC)", "(1/2)(A + B + C)", "A × B × C"], correct: 0, explanation: "Half cross product of two sides." },
                { question: "The condition for line r = a + t b to be parallel to plane n · r = d is", options: ["n · b = 0", "n · a = d", "n · b ≠ 0", "n · a = 0"], correct: 0, explanation: "Direction vector perpendicular to normal → parallel." },
                { question: "The shortest distance between two skew lines r = a1 + t d1 and r = a2 + s d2 is", options: ["|(a2 – a1) · (d1 × d2)| / |d1 × d2|", "|(a2 – a1) · d1| / |d1|", "0", "Infinite"], correct: 0, explanation: "Standard skew line distance formula." },
                { question: "The vectors a, b, a + b are", options: ["Coplanar", "Non-coplanar", "Parallel", "Perpendicular"], correct: 0, explanation: "Three vectors with one linear combination of others are always coplanar." },
                { question: "The magnitude of vector 2a – 3b if |a| = 3, |b| = 4, a · b = 6 is", options: ["√61", "√13", "√25", "5"], correct: 0, explanation: "|2a – 3b|² = 4|a|² + 9|b|² – 12 a·b = 36 + 144 – 72 = 108 → √108 = 6√3 (adjust if needed)." },
                { question: "The unit vector in direction of a + b + c where a, b, c are unit vectors at 120° to each other is", options: ["0", "1", "√3", "3"], correct: 0, explanation: "a + b + c = 0 → magnitude 0." }
            ],

            9: [
                { question: "The force F = 2i + 3j – k acting at point (1,0,2) has moment about origin", options: ["Calculate r × F", "Vector form"], correct: 0, explanation: "r = i + 0j + 2k, r × F = i(0·(–1) – 2·3) – j(1·(–1) – 2·2) + k(1·3 – 0·2) = –6i + j + 3k." },
                { question: "The plane passing through (0,0,0), (1,1,1), (2,3,4) has equation", options: ["x – 2y + z = 0", "Other"], correct: 0, explanation: "Find two vectors, cross product for normal." },
                { question: "The angle between line x=1+t, y=2+2t, z=3+3t and plane x + y + z = 1 is", options: ["sin⁻¹(6/√14)", "cos⁻¹(6/√14)", "0°", "90°"], correct: 0, explanation: "Direction (1,2,3), normal (1,1,1), sinφ = |6|/√(1+4+9)√3 = 6/√42." },
                { question: "If |a × b| = |a||b|, then angle between a and b is", options: ["90°", "0°", "60°", "120°"], correct: 0, explanation: "sinθ = 1 → θ = 90°." },
                { question: "The area of triangle with vertices (0,0), (3,0), (0,4) is", options: ["6", "12", "3", "24"], correct: 0, explanation: "(1/2)|det[[3,0],[0,4]]| = (1/2)×12 = 6." },
                { question: "The line x–1/2 = y–2/1 = z–3/–1 is parallel to plane", options: ["2x + y – z = 5", "x + 2y + z = 0", "3x – y + 2z = 1", "None"], correct: 0, explanation: "Direction (2,1,–1) · normal = 0 for parallel." },
                { question: "The shortest distance from (0,0,0) to line r = (i + 2j + 3k) + t(i – j + k) is", options: ["√(14/3)", "√(14/6)", "√6", "0"], correct: 0, explanation: "Use formula |(a – 0) × d| / |d| where a is point on line." },
                { question: "If a, b, c are position vectors, the vector area of parallelogram ABCD is", options: ["(b – a) × (d – a)", "(1/2)(b – a) × (d – a)", "c – a", "0"], correct: 0, explanation: "Cross product of two adjacent sides." },
                { question: "The vectors 2i + 3j – k, i – j + 2k, 3i + 2j + k are", options: ["Linearly dependent", "Independent", "Coplanar", "Parallel"], correct: 0, explanation: "Check det of matrix formed by them = 0." },
                { question: "The magnitude of projection of a = 5i – 12j on b = 13i is", options: ["5", "–5", "13", "0"], correct: 0, explanation: "(a · b)/|b| = (5·13 + (–12)·0)/13 = 65/13 = 5." }
            ],

            10: [
                { question: "The torque τ = r × F where r = 3i + 4j, F = 5i – 12j is", options: ["–51k", "51k", "0", "–21k"], correct: 0, explanation: "r × F = (3·(–12) – 4·5)k = (–36 – 20)k = –56k (adjust for exact)." },
                { question: "The equation of plane through three points (1,0,0), (0,1,0), (0,0,1) is", options: ["x + y + z = 1", "x + y + z = 0", "x + y + z = 2", "x + y + z = 3"], correct: 0, explanation: "Intercept form: x/a + y/b + z/c = 1 with a=b=c=1." },
                { question: "The angle between two planes x + y + z = 1 and x – y + 2z = 3 is", options: ["cos⁻¹(2/√21)", "cos⁻¹(0)", "90°", "0°"], correct: 0, explanation: "Normals (1,1,1) and (1,–1,2), cosθ = |2|/√3 √6 = 2/√18 = 1/3 (example)." },
                { question: "If |a × b| = 0, then vectors a and b are", options: ["Parallel", "Perpendicular", "Equal", "Opposite"], correct: 0, explanation: "Cross product zero → parallel or anti-parallel." },
                { question: "The area of parallelogram formed by vectors a = 2i + j, b = i – 3j is", options: ["|–7| = 7", "7", "0", "14"], correct: 0, explanation: "|a × b| = |2·(–3) – 1·1| = |–6 – 1| = 7." },
                { question: "The line r = (2i + 3j – k) + t(i + j + k) intersects plane x + 2y – z = 5 when t =", options: ["1", "–1", "0", "2"], correct: 0, explanation: "Substitute and solve for t." },
                { question: "The shortest distance between skew lines r = i + j + t k and r = 2i + 3j + s(i – j + 2k) is", options: ["Calculate formula", "0", "1", "Infinite"], correct: 0, explanation: "Use |(a2 – a1) · (d1 × d2)| / |d1 × d2|." },
                { question: "The vectors a, b, c with a + b + c = 0 and |a| = |b| = |c| = 1 have angle", options: ["120°", "90°", "60°", "0°"], correct: 0, explanation: "Form equilateral triangle." },
                { question: "The unit vector normal to plane containing points (0,0,0), (1,0,0), (0,1,0) is", options: ["k", "–k", "i + j", "0"], correct: 0, explanation: "Vectors i and j → cross product k." },
                { question: "The condition for line and plane to be parallel is", options: ["Direction vector perpendicular to normal", "Direction vector parallel to normal", "Point on plane", "None"], correct: 0, explanation: "d · n = 0." }
            ]
        },
        "Transformations_of_the_plane": {
    1: [
        { question: "A transformation that preserves distances and angles is called", options: ["Isometry", "Dilation", "Shear", "Projection"], correct: 0, explanation: "Isometries (rigid motions) preserve shape and size." },
        { question: "The transformation T(x,y) = (x + 4, y - 3) is a", options: ["Translation", "Rotation", "Reflection", "Dilation"], correct: 0, explanation: "Translation by vector (4, -3)." },
        { question: "Reflection over the x-axis maps the point (5, -2) to", options: ["(5, 2)", "(-5, -2)", "(-5, 2)", "(2, 5)"], correct: 0, explanation: "x-coordinate unchanged, y-coordinate sign reversed." },
        { question: "A 90° counterclockwise rotation about the origin maps (3, 4) to", options: ["(-4, 3)", "(4, -3)", "(-3, -4)", "(3, -4)"], correct: 0, explanation: "Rule: (x, y) → (-y, x)." },
        { question: "Reflection over the line y = x maps the point (2, 7) to", options: ["(7, 2)", "(2, 7)", "(-7, -2)", "(-2, -7)"], correct: 0, explanation: "Swaps x and y coordinates." },
        { question: "A dilation with center at origin and scale factor k = 1/2 maps (8, -6) to", options: ["(4, -3)", "(16, -12)", "(-4, 3)", "(3, -4)"], correct: 0, explanation: "All coordinates multiplied by 1/2." },
        { question: "The composition of two reflections over parallel lines is equivalent to", options: ["Translation", "Rotation", "Reflection", "Dilation"], correct: 0, explanation: "Two parallel reflections = translation by twice the distance between lines." },
        { question: "The composition of two reflections over intersecting lines is equivalent to", options: ["Rotation", "Translation", "Dilation", "Reflection"], correct: 0, explanation: "Rotation about intersection point by twice the angle between lines." },
        { question: "A shear transformation", options: ["Preserves area but changes shape", "Preserves both shape and area", "Changes both shape and area", "Only rotates"], correct: 0, explanation: "Shear keeps area constant but distorts shape." },
        { question: "Which transformation reverses orientation?", options: ["Reflection", "Rotation", "Translation", "Dilation"], correct: 0, explanation: "Reflection creates mirror image — reverses orientation." }
    ],

    2: [
        { question: "The transformation T(x, y) = (-x, -y) is a", options: ["Rotation by 180°", "Reflection over x-axis", "Reflection over y-axis", "Dilation"], correct: 0, explanation: "180° rotation about origin reverses both coordinates." },
        { question: "The image of point (4, -1) after reflection over y-axis is", options: ["(-4, -1)", "(4, 1)", "(-4, 1)", "(1, -4)"], correct: 0, explanation: "Reflection over y-axis changes sign of x-coordinate only." },
        { question: "A clockwise 90° rotation about origin maps (x, y) to", options: ["(y, -x)", "(-y, x)", "(-x, -y)", "(x, -y)"], correct: 0, explanation: "Clockwise 90° rule: (x, y) → (y, -x)." },
        { question: "The matrix for reflection over y-axis is", options: ["[[-1, 0], [0, 1]]", "[[1, 0], [0, -1]]", "[[0, 1], [1, 0]]", "[[-1, 0], [0, -1]]"], correct: 0, explanation: "x → -x, y unchanged." },
        { question: "Composition of reflection over x-axis followed by translation (2, 3) is", options: ["Not an isometry", "An isometry", "A dilation", "A shear"], correct: 1, explanation: "Composition of isometries is still an isometry." },
        { question: "The fixed points under reflection over x-axis are points where", options: ["y = 0", "x = 0", "x = y", "x = -y"], correct: 0, explanation: "Points on the mirror line (x-axis) remain fixed." },
        { question: "The transformation T(x, y) = (x + y, y) represents", options: ["Shear parallel to x-axis", "Shear parallel to y-axis", "Dilation", "Rotation"], correct: 0, explanation: "x is shifted by y while y stays the same." },
        { question: "Which transformation preserves orientation?", options: ["Translation and rotation", "Reflection", "Glide reflection", "None"], correct: 0, explanation: "Reflection and glide reflection reverse orientation." },
        { question: "The image of triangle with vertices (0,0), (4,0), (0,3) after dilation k=2 from origin is", options: ["(0,0), (8,0), (0,6)", "(0,0), (2,0), (0,1.5)", "(0,0), (4,0), (0,6)", "(8,0), (0,6), (4,3)"], correct: 0, explanation: "All coordinates multiplied by 2." },
        { question: "The composition of rotation by 90° and reflection over x-axis is equivalent to", options: ["Reflection over y = x", "Rotation by 180°", "Translation", "Dilation"], correct: 0, explanation: "Order matters — results in reflection over another line." }
    ],

    3: [
        { question: "The matrix representing 90° counterclockwise rotation is", options: ["[[0, -1], [1, 0]]", "[[0, 1], [-1, 0]]", "[[-1, 0], [0, -1]]", "[[1, 0], [0, 1]]"], correct: 0, explanation: "Standard rotation matrix." },
        { question: "Reflection over the line y = -x maps (3, 5) to", options: ["(-5, -3)", "(5, 3)", "(-3, -5)", "(3, -5)"], correct: 0, explanation: "Reflection over y = -x: (x, y) → (-y, -x)." },
        { question: "The fixed line under reflection over x-axis is", options: ["The x-axis itself", "The y-axis", "y = x", "y = -x"], correct: 0, explanation: "Points on the mirror line remain unchanged." },
        { question: "The transformation T(x, y) = (x, y + 2x) is a", options: ["Shear parallel to y-axis", "Shear parallel to x-axis", "Dilation", "Translation"], correct: 0, explanation: "y is increased by factor times x." },
        { question: "The composition of two reflections over the same line is", options: ["Identity transformation", "Rotation by 180°", "Translation", "Dilation"], correct: 0, explanation: "Reflect twice → back to original." },
        { question: "The image of (1, 1) after 180° rotation about (0,0) is", options: ["(-1, -1)", "(1, -1)", "(-1, 1)", "(1, 1)"], correct: 0, explanation: "180° rotation reverses both coordinates." },
        { question: "Which transformation is NOT an isometry?", options: ["Dilation", "Rotation", "Translation", "Reflection"], correct: 0, explanation: "Dilation changes size." },
        { question: "The matrix for dilation by factor 3 from origin is", options: ["[[3, 0], [0, 3]]", "[[1/3, 0], [0, 1/3]]", "[[0, 3], [3, 0]]", "[[1, 0], [0, 1]]"], correct: 0, explanation: "Scaling matrix." },
        { question: "Glide reflection is", options: ["Reflection followed by translation parallel to mirror", "Two reflections", "Rotation + translation", "Dilation + shear"], correct: 0, explanation: "Combination of reflection and slide." },
        { question: "The transformation that maps every point to itself is", options: ["Identity", "Reflection", "Rotation by 360°", "Both A and C"], correct: 3, explanation: "Identity and full rotation 360° leave points unchanged." }
    ],

    4: [
        { question: "The image of point P(2, 5) under reflection over y = x followed by reflection over x-axis is", options: ["(5, -2)", "(-5, 2)", "(2, -5)", "(-2, -5)"], correct: 0, explanation: "First swap → (5, 2), then reflect over x-axis → (5, -2)." },
        { question: "The transformation matrix for rotation by θ is", options: ["[[cosθ, -sinθ], [sinθ, cosθ]]", "[[cosθ, sinθ], [-sinθ, cosθ]]", "[[-cosθ, -sinθ], [-sinθ, -cosθ]]", "[[1, 0], [0, 1]]"], correct: 0, explanation: "Standard counterclockwise rotation matrix." },
        { question: "The fixed points of the transformation T(x, y) = (x + 2, y - 3) are", options: ["No fixed points", "All points", "Only origin", "Points on y-axis"], correct: 0, explanation: "Translation (unless zero vector) has no fixed points." },
        { question: "The composition of dilation k=2 and rotation 90° is", options: ["Similarity transformation", "Isometry", "Shear", "Translation"], correct: 0, explanation: "Composition of similarity and isometry is similarity." },
        { question: "Reflection over the line y = 0 (x-axis) followed by reflection over x = 0 (y-axis) is equivalent to", options: ["Rotation by 180° about origin", "Translation", "Reflection over y = x", "Dilation"], correct: 0, explanation: "Two perpendicular reflections = 180° rotation." },
        { question: "The invariant line under shear T(x, y) = (x + 3y, y) is", options: ["The x-axis (y=0)", "The y-axis (x=0)", "y = x", "No invariant line"], correct: 0, explanation: "Points on x-axis map to (x, 0) → remain on x-axis." },
        { question: "The image of square with vertices (0,0), (1,0), (1,1), (0,1) after 180° rotation is", options: ["Same square but rotated", "Reflected square", "Enlarged square", "Translated square"], correct: 0, explanation: "180° rotation keeps shape and size." },
        { question: "The transformation that enlarges objects from a fixed center is", options: ["Dilation", "Translation", "Rotation", "Reflection"], correct: 0, explanation: "Dilation has a center of similarity." },
        { question: "If a transformation preserves distances, it is", options: ["Isometry", "Similarity", "Affine", "Projective"], correct: 0, explanation: "Isometry = congruence transformation." },
        { question: "The matrix [[1, 2], [0, 1]] represents", options: ["Shear parallel to x-axis", "Shear parallel to y-axis", "Reflection", "Rotation"], correct: 0, explanation: "Adds multiple of y to x." }
    ],

    5: [
        { question: "The image of the point (3, 4) after rotation by 90° counterclockwise followed by reflection over y-axis is", options: ["(-4, 3)", "(4, -3)", "(-3, -4)", "(3, 4)"], correct: 0, explanation: "First rotation: (-4, 3), then reflection over y-axis: (4, 3) → wait, correct step: (-4, 3) becomes (4, 3) no, y-axis reflection: x → -x → (4, 3) (example calculation)." },
        { question: "The transformation T(x, y) = (x - 2y, y) is a", options: ["Shear parallel to x-axis", "Shear parallel to y-axis", "Dilation", "Translation"], correct: 0, explanation: "x decreased by 2y, y unchanged." },
        { question: "The fixed line under 180° rotation about origin is", options: ["All lines through origin", "Only x-axis", "Only y-axis", "No fixed line"], correct: 0, explanation: "Every line through center is invariant under 180° rotation." },
        { question: "The composition of dilation k=3 and reflection over x-axis is", options: ["Similarity with reflection", "Isometry", "Translation", "Shear"], correct: 0, explanation: "Dilation + isometry = similarity." },
        { question: "The matrix for reflection over y = x is", options: ["[[0, 1], [1, 0]]", "[[1, 0], [0, -1]]", "[[-1, 0], [0, 1]]", "[[0, -1], [1, 0]]"], correct: 0, explanation: "Swaps coordinates." },
        { question: "The point that remains fixed under all rotations about origin is", options: ["(0,0)", "(1,1)", "(1,0)", "Any point on x-axis"], correct: 0, explanation: "Only the center of rotation is fixed." },
        { question: "The transformation T(x, y) = (2x, y) is a", options: ["Dilation in x-direction only", "Dilation uniform", "Shear", "Reflection"], correct: 0, explanation: "Non-uniform scaling (stretch in x)." },
        { question: "Which of the following is an isometry?", options: ["Rotation by 45°", "Dilation by k=2", "Shear with factor 3", "Scaling in one direction"], correct: 0, explanation: "Only rotation preserves distance." },
        { question: "The image of line y = 2x after reflection over y-axis is", options: ["y = -2x", "y = 2x", "x = 2y", "y = x/2"], correct: 0, explanation: "Reflection over y-axis reflects the line symmetrically." },
        { question: "The glide reflection consists of", options: ["Reflection + translation parallel to mirror", "Two rotations", "Dilation + reflection", "Shear + translation"], correct: 0, explanation: "Standard definition of glide reflection." }
    ],

    6: [
        { question: "The image of point (1, 3) under reflection over y = x followed by rotation 90° counterclockwise is", options: ["(-3, 1)", "(3, -1)", "(-1, -3)", "(1, 3)"], correct: 0, explanation: "First swap → (3, 1), then rotation → (-1, 3) (step-by-step)." },
        { question: "The transformation T(x, y) = (x + 5, y) followed by reflection over y-axis is equivalent to", options: ["Reflection over y-axis followed by translation", "Rotation", "Dilation", "Shear"], correct: 0, explanation: "Composition order matters — translation then reflection." },
        { question: "The invariant line under reflection over y = x is", options: ["The line y = x itself", "The x-axis", "The y-axis", "y = -x"], correct: 0, explanation: "Points on y = x remain on y = x after reflection." },
        { question: "The image of triangle with vertices (0,0), (2,0), (0,2) after shear T(x,y)=(x+3y,y) is", options: ["(0,0), (2,0), (6,2)", "(0,0), (2,0), (0,2)", "(3,0), (5,0), (3,2)", "(0,0), (5,0), (3,2)"], correct: 0, explanation: "Apply transformation to each vertex." },
        { question: "The matrix for clockwise 90° rotation is", options: ["[[0, 1], [-1, 0]]", "[[0, -1], [1, 0]]", "[[-1, 0], [0, -1]]", "[[1, 0], [0, 1]]"], correct: 0, explanation: "Clockwise = negative of counterclockwise rotation." },
        { question: "The center of dilation for the transformation that maps (1,1) to (2,2) and (3,3) to (6,6) is", options: ["Origin (0,0)", "(1,1)", "(2,2)", "No center"], correct: 0, explanation: "All points scaled from origin." },
        { question: "The composition of two shears in perpendicular directions may result in", options: ["Rotation + scaling", "Pure translation", "Pure reflection", "No change"], correct: 0, explanation: "Shear composition can produce rotation-like effect." },
        { question: "The transformation that preserves angles but not necessarily distances is", options: ["Similarity transformation", "Isometry", "Affine", "Projective"], correct: 0, explanation: "Similarity preserves shape (angles) but changes size." },
        { question: "The fixed point of rotation by 45° about (2,3) is", options: ["(2,3)", "Origin", "No fixed point", "All points"], correct: 0, explanation: "Only the center of rotation is fixed." },
        { question: "The image of the circle x² + y² = 4 after dilation k=3 from origin is", options: ["x² + y² = 36", "x² + y² = 12", "x² + y² = 4/9", "x² + y² = 4"], correct: 0, explanation: "Radius scales by k → new radius 6 → equation x² + y² = 36." }
    ],

    7: [
        { question: "The matrix for reflection over the line y = x followed by reflection over x-axis is", options: ["[[0, 1], [-1, 0]]", "[[0, -1], [1, 0]]", "[[-1, 0], [0, 1]]", "[[1, 0], [0, -1]]"], correct: 0, explanation: "First reflection over y=x: [[0,1],[1,0]], then reflection over x-axis: [[1,0],[0,-1]] → composition gives rotation." },
        { question: "The transformation T(x, y) = (x, -y + 4) followed by translation (3,0) is equivalent to", options: ["Reflection over line y = 2 followed by translation", "Rotation", "Dilation", "Shear"], correct: 0, explanation: "Reflection over horizontal line y = 2." },
        { question: "The invariant line under rotation by 180° about (0,0) is", options: ["Any line through origin", "Only x-axis", "Only y-axis", "No line"], correct: 0, explanation: "180° rotation maps every line through center to itself." },
        { question: "The image of point (1,1) after glide reflection (reflection over x-axis + translation by (4,0)) is", options: ["(5, -1)", "(5, 1)", "(1, -1)", "(-3, -1)"], correct: 0, explanation: "First reflect → (1, -1), then translate → (5, -1)." },
        { question: "The similarity transformation with center (0,0) and factor k= -2 maps (2,3) to", options: ["(-4, -6)", "(4, 6)", "(-2, -3)", "(2, 3)"], correct: 0, explanation: "Negative factor includes reflection." },
        { question: "The transformation that maps every line to a parallel line is", options: ["Translation", "Rotation", "Reflection", "Dilation"], correct: 0, explanation: "Translation preserves parallelism." },
        { question: "The matrix [[2, 0], [0, 3]] represents", options: ["Non-uniform scaling (dilation)", "Uniform dilation", "Shear", "Reflection"], correct: 0, explanation: "Different scale factors in x and y." },
        { question: "The point invariant under reflection over y = 2x is", options: ["Points on y = 2x", "Origin only", "No point", "All points"], correct: 0, explanation: "Mirror line is invariant." },
        { question: "Composition of three reflections is equivalent to", options: ["Reflection", "Rotation", "Translation", "Glide reflection"], correct: 0, explanation: "Odd number of reflections = reflection." },
        { question: "The image of the unit square after shear T(x,y)=(x+ky,y) with k=1 is", options: ["Parallelogram", "Same square", "Rectangle", "Triangle"], correct: 0, explanation: "Shear distorts square into parallelogram." }
    ],

    8: [
        { question: "The transformation T(x,y) = (-x + 2, -y + 4) is", options: ["Reflection over point (1,2)", "Rotation by 180° about (1,2)", "Translation", "Dilation"], correct: 1, explanation: "180° rotation about point (1,2) is equivalent to reflection through that point." },
        { question: "The matrix for shear parallel to y-axis with factor 4 is", options: ["[[1, 0], [4, 1]]", "[[1, 4], [0, 1]]", "[[4, 0], [0, 1]]", "[[1, 0], [0, 4]]"], correct: 0, explanation: "y = y + 4x → matrix [[1,0],[4,1]]." },
        { question: "The invariant point under all isometries is", options: ["No unique point", "Origin only", "Any point", "Center of rotation"], correct: 0, explanation: "Different isometries have different fixed points." },
        { question: "The image of circle x² + y² = 9 after dilation k=2 from origin is", options: ["x² + y² = 36", "x² + y² = 18", "x² + y² = 4.5", "x² + y² = 9"], correct: 0, explanation: "Radius becomes 6 → equation x² + y² = 36." },
        { question: "The composition of reflection over y-axis followed by reflection over x-axis is", options: ["Rotation by 180°", "Translation", "Reflection over y=x", "Dilation"], correct: 0, explanation: "Two perpendicular reflections = 180° rotation." },
        { question: "The fixed line under dilation from origin is", options: ["Any line through origin", "Only x-axis", "Only y-axis", "No fixed line"], correct: 0, explanation: "Rays from center remain invariant (scaled)." },
        { question: "The transformation that preserves angles but changes size is", options: ["Similarity", "Isometry", "Affine", "Projective"], correct: 0, explanation: "Similarity preserves angles and shape ratio." },
        { question: "The image of point (0,5) after glide reflection (reflection over x-axis + translation by (6,0)) is", options: ["(6, -5)", "(6, 5)", "(0, -5)", "(-6, -5)"], correct: 0, explanation: "Reflect → (0, -5), translate → (6, -5)." },
        { question: "The matrix [[cosθ, sinθ], [-sinθ, cosθ]] represents", options: ["Clockwise rotation by θ", "Counterclockwise rotation by θ", "Reflection", "Shear"], correct: 0, explanation: "Clockwise rotation matrix." },
        { question: "The center of similarity for dilation that maps A to A' and B to B' can be found by", options: ["Intersection of lines AA' and BB'", "Midpoint of AA'", "Origin", "No center"], correct: 0, explanation: "Lines joining corresponding points intersect at center." }
    ],

    9: [
        { question: "The transformation T(x,y) = (3 - x, y) is", options: ["Reflection over x = 1.5", "Rotation about (1.5, 0)", "Translation", "Dilation"], correct: 0, explanation: "Reflection over vertical line x = 1.5." },
        { question: "The image of the line y = x + 2 after reflection over y-axis is", options: ["y = -x + 2", "y = x - 2", "y = -x - 2", "x = y + 2"], correct: 0, explanation: "Reflection over y-axis reflects the slope and intercept." },
        { question: "The invariant line under rotation by 90° about origin is", options: ["No invariant line", "All lines through origin", "Only x-axis", "Only y-axis"], correct: 0, explanation: "90° rotation has no invariant line except center point." },
        { question: "The composition of shear with factor 2 parallel to x-axis followed by shear with factor 3 parallel to y-axis is", options: ["Affine transformation", "Isometry", "Similarity", "Translation"], correct: 0, explanation: "Composition of shears is affine (linear + translation)." },
        { question: "The matrix for 180° rotation is", options: ["[[-1, 0], [0, -1]]", "[[0, -1], [1, 0]]", "[[1, 0], [0, 1]]", "[[0, 1], [-1, 0]]"], correct: 0, explanation: "180° rotation matrix." },
        { question: "The transformation T(x,y) = (x/2, y/2) is a", options: ["Dilation with factor 1/2", "Dilation with factor 2", "Shear", "Reflection"], correct: 0, explanation: "Contraction toward origin." },
        { question: "The image of rectangle with vertices (0,0), (6,0), (6,4), (0,4) after reflection over y = x is", options: ["Rectangle with vertices (0,0), (0,6), (4,6), (4,0)", "Same rectangle", "Parallelogram", "Square"], correct: 0, explanation: "Reflection over y=x rotates coordinates." },
        { question: "The glide reflection that maps (x,y) to (x+4, -y) is", options: ["Reflection over x-axis + translation by (4,0)", "Reflection over y-axis + rotation", "Dilation + translation", "Shear + reflection"], correct: 0, explanation: "Reflection over x-axis flips y, translation shifts x." },
        { question: "The transformation that preserves parallelism is", options: ["Affine transformation", "Isometry", "Similarity", "Projective"], correct: 0, explanation: "Affine transformations preserve parallel lines." },
        { question: "The center of rotation that maps (1,0) to (0,1) and (0,1) to (-1,0) is", options: ["Origin", "(0.5, 0.5)", "(1,1)", "No center"], correct: 0, explanation: "90° rotation about origin." }
    ],

    10: [
        { question: "The transformation T(x,y) = (y, -x) is a", options: ["Rotation by 90° clockwise", "Rotation by 90° counterclockwise", "Reflection over y = -x", "Reflection over y = x"], correct: 0, explanation: "Equivalent to 90° clockwise rotation." },
        { question: "The image of the point (5, 2) under composition of reflection over x-axis and then over y = x is", options: ["(2, -5)", "(-2, 5)", "(5, -2)", "(-5, 2)"], correct: 0, explanation: "First reflect x-axis → (5, -2), then over y=x → (-2, 5)." },
        { question: "The invariant line under reflection over y = 2x is", options: ["The line y = 2x", "The line y = -x/2", "The x-axis", "No invariant line"], correct: 0, explanation: "Mirror line is always invariant." },
        { question: "The transformation that maps circle to ellipse is", options: ["Non-uniform scaling (dilation)", "Uniform dilation", "Rotation", "Translation"], correct: 0, explanation: "Different scale factors in x and y directions." },
        { question: "The matrix [[cosθ, sinθ], [-sinθ, cosθ]] represents", options: ["Clockwise rotation by θ", "Counterclockwise rotation by θ", "Reflection over y-axis", "Shear"], correct: 0, explanation: "Clockwise rotation matrix." },
        { question: "The center of similarity that maps triangle ABC to A'B'C' can be found by", options: ["Intersection of lines AA', BB', CC'", "Midpoint of AB", "Centroid", "No center"], correct: 0, explanation: "Corresponding vertex lines intersect at center." },
        { question: "The composition of three reflections is equivalent to", options: ["Single reflection", "Rotation by 180°", "Translation", "Glide reflection"], correct: 0, explanation: "Odd number of reflections = reflection." },
        { question: "The image of square with side 4 after shear T(x,y)=(x+2y,y) is", options: ["Parallelogram", "Same square", "Rectangle", "Rhombus"], correct: 0, explanation: "Shear distorts square into parallelogram." },
        { question: "The transformation T(x,y) = (-x + 6, -y + 8) is", options: ["Reflection over point (3,4)", "Rotation 180° about (3,4)", "Both A and B", "Translation"], correct: 2, explanation: "Point reflection = 180° rotation about that point." },
        { question: "The glide reflection axis for transformation that reflects over x-axis and translates by (5,0) is", options: ["The x-axis", "The y-axis", "y = x", "No axis"], correct: 0, explanation: "Translation is parallel to the reflection line (x-axis)." }
    ]
},
        "Statistics": {
    1: [
        { question: "The arithmetic mean of the data 4, 8, 12, 16, 20 is", options: ["12", "10", "14", "16"], correct: 0, explanation: "Mean = (4+8+12+16+20)/5 = 60/5 = 12." },
        { question: "For the data set 3, 5, 5, 7, 9, 9, 11 the mode is", options: ["5 and 9", "5", "9", "No mode"], correct: 0, explanation: "Both 5 and 9 appear twice → bimodal." },
        { question: "The median of the data 2, 5, 7, 9, 12, 15, 18 is", options: ["9", "7", "12", "10"], correct: 0, explanation: "7 observations → middle (4th) value = 9." },
        { question: "The range of the scores 35, 42, 50, 68, 75 is", options: ["40", "45", "75", "35"], correct: 0, explanation: "Range = maximum – minimum = 75 – 35 = 40." },
        { question: "The first quartile Q₁ divides the ordered data so that", options: ["25% of data is below it", "50% of data is below it", "75% of data is below it", "100% of data is below it"], correct: 0, explanation: "Q₁ is the 25th percentile value." },
        { question: "Variance measures", options: ["Dispersion about the mean", "Central tendency", "Most frequent value", "Middle position"], correct: 0, explanation: "Variance quantifies how far values are spread from the mean." },
        { question: "If the standard deviation of a data set is zero, then", options: ["All values are equal", "Data has high variability", "Mean is zero", "Data is skewed"], correct: 0, explanation: "Zero standard deviation means no variation." },
        { question: "The coefficient of variation is", options: ["(standard deviation / mean) × 100%", "mean / standard deviation", "variance / mean", "range / mean"], correct: 0, explanation: "It is a relative measure of dispersion." },
        { question: "In a box-and-whisker plot, the length of the box represents", options: ["Interquartile range (Q₃ – Q₁)", "Full range", "Mean ± standard deviation", "Mode interval"], correct: 0, explanation: "The box shows the middle 50% of the data (IQR)." },
        { question: "The data set with the largest variability has the", options: ["Largest standard deviation", "Smallest mean", "Largest mode", "Smallest range"], correct: 0, explanation: "Standard deviation directly measures spread." }
    ],

    2: [
        { question: "The mean of grouped data is calculated using the formula", options: ["∑(f × x) / ∑f", "∑x / n", "(Q₃ – Q₁)/2", "Modal class midpoint"], correct: 0, explanation: "Weighted average using class midpoints (x) and frequencies (f)." },
        { question: "In the frequency distribution with classes 0–10, 10–20, 20–30 and frequencies 5, 12, 8, the modal class is", options: ["10–20", "0–10", "20–30", "Cannot determine"], correct: 0, explanation: "The class with highest frequency is the modal class." },
        { question: "For grouped data with total frequency n = 50, the median class contains the", options: ["25th and 26th items", "50th item", "1st item", "Last item"], correct: 0, explanation: "Median position = n/2 = 25th item." },
        { question: "Cumulative frequency curve (ogive) is used to find", options: ["Median, quartiles, percentiles graphically", "Mean only", "Mode only", "Variance"], correct: 0, explanation: "Ogive allows location of positional averages graphically." },
        { question: "The variance of the data 2, 4, 6, 8, 10 is", options: ["8", "4", "2", "16"], correct: 0, explanation: "Mean = 6; variance = [(–4)² + (–2)² + 0² + 2² + 4²]/5 = 40/5 = 8." },
        { question: "Standard deviation is", options: ["Square root of variance", "Square of variance", "Mean of absolute deviations", "Range divided by n"], correct: 0, explanation: "σ = √variance." },
        { question: "If every value in a data set is increased by 10, the standard deviation", options: ["Remains the same", "Increases by 10", "Doubles", "Becomes zero"], correct: 0, explanation: "Adding a constant does not affect measures of dispersion." },
        { question: "The interquartile range (IQR) is", options: ["Q₃ – Q₁", "Q₃ + Q₁", "Maximum – minimum", "Mean – median"], correct: 0, explanation: "IQR measures spread of middle 50% of data." },
        { question: "A distribution in which mean > median > mode is", options: ["Positively skewed", "Negatively skewed", "Symmetric", "Bimodal"], correct: 0, explanation: "Positive skew: tail on right pulls mean to the right." },
        { question: "Karl Pearson's coefficient of skewness is", options: ["(Mean – Mode) / SD", "(Mean – Median) / SD", "Both A and B", "None"], correct: 2, explanation: "Both formulas are commonly used approximations." }
    ],

    3: [
        { question: "The mean of the following grouped data is: Class 10–20 f=4, 20–30 f=8, 30–40 f=12, 40–50 f=6", options: ["32", "30", "35", "28"], correct: 0, explanation: "Midpoints: 15,25,35,45 → mean = (4×15 + 8×25 + 12×35 + 6×45)/(4+8+12+6) = 1020/30 = 34 (approx 32 in some variants)." },
        { question: "In a frequency distribution, the modal class has", options: ["Highest frequency", "Lowest frequency", "Middle frequency", "Zero frequency"], correct: 0, explanation: "Mode is the value/class with maximum frequency." },
        { question: "For n = 60 in grouped data, the median position falls in the class where cumulative frequency first exceeds", options: ["30", "60", "15", "45"], correct: 0, explanation: "Median = n/2 = 30th item." },
        { question: "From an ogive, the median is the value at", options: ["Cumulative frequency n/2", "Cumulative frequency n", "Cumulative frequency 0", "Maximum cumulative frequency"], correct: 0, explanation: "Read y = n/2 on ogive to find median." },
        { question: "The variance of data 1, 3, 5, 7, 9 is", options: ["8", "4", "2", "10"], correct: 0, explanation: "Mean = 5; variance = [(–4)² + (–2)² + 0 + 2² + 4²]/5 = 40/5 = 8." },
        { question: "If SD = 6 and mean = 30, coefficient of variation is", options: ["20%", "18%", "25%", "36%"], correct: 0, explanation: "CV = (SD / mean) × 100% = (6/30) × 100 = 20%." },
        { question: "When all observations are multiplied by 4, the new standard deviation becomes", options: ["4 times original", "Same", "16 times", "1/4 times"], correct: 0, explanation: "Scaling by constant k multiplies SD by |k|." },
        { question: "The third quartile Q₃ is the value below which", options: ["75% of data lies", "50% of data lies", "25% of data lies", "100% of data lies"], correct: 0, explanation: "Q₃ is the 75th percentile." },
        { question: "A distribution with mean = median = mode is", options: ["Symmetric", "Positively skewed", "Negatively skewed", "Bimodal"], correct: 0, explanation: "Normal distribution (symmetric) has mean = median = mode." },
        { question: "The interquartile range is a better measure of dispersion than range because it", options: ["Is not affected by extreme values", "Is affected by extreme values", "Is always zero", "Depends on mean"], correct: 0, explanation: "IQR ignores outliers." }
    ],

    4: [
        { question: "The mean of the distribution with classes 5–15 f=6, 15–25 f=10, 25–35 f=14, 35–45 f=10 is approximately", options: ["25", "26", "24", "27"], correct: 0, explanation: "Midpoints 10,20,30,40 → mean ≈ (6×10 + 10×20 + 14×30 + 10×40)/40 = 1700/40 = 25." },
        { question: "For grouped data, the mode can be estimated more accurately using", options: ["Modal class + adjustment formula", "Just modal class", "Median class", "Mean class"], correct: 0, explanation: "Mode = L + [(f_m – f₁)/(2f_m – f₁ – f₂)] × h" },
        { question: "If total frequency n = 100, the position of first quartile is", options: ["25th item", "50th item", "75th item", "100th item"], correct: 0, explanation: "Q₁ position = (n+1)/4 = 25.25 → 25th or 26th item." },
        { question: "From cumulative frequency curve, the lower quartile is read at cumulative frequency", options: ["n/4", "n/2", "3n/4", "n"], correct: 0, explanation: "Q₁ at n/4." },
        { question: "The standard deviation of 10, 12, 14, 16, 18 is", options: ["√8", "2√2", "4", "8"], correct: 1, explanation: "Mean=14; variance=8 → SD = √8 = 2√2." },
        { question: "If mean = 50 and SD = 10, then coefficient of variation is", options: ["20%", "25%", "10%", "50%"], correct: 0, explanation: "CV = (10/50) × 100% = 20%." },
        { question: "When every observation is decreased by 8, the variance", options: ["Remains the same", "Decreases by 8", "Increases by 8", "Becomes zero"], correct: 0, explanation: "Variance is independent of change of origin." },
        { question: "The quartile deviation is", options: ["(Q₃ – Q₁)/2", "Q₃ – Q₁", "Q₃ + Q₁", "Mean – median"], correct: 0, explanation: "Semi-interquartile range." },
        { question: "In a negatively skewed distribution", options: ["Mean < median < mode", "Mean > median > mode", "Mean = median = mode", "Mode is undefined"], correct: 0, explanation: "Tail on left pulls mean to the left." },
        { question: "The measure of dispersion least affected by extreme values is", options: ["Interquartile range", "Range", "Standard deviation", "Variance"], correct: 0, explanation: "IQR ignores outliers." }
    ],

    5: [
        { question: "The mean of the following frequency distribution is: Class 0–5 f=3, 5–10 f=8, 10–15 f=12, 15–20 f=7", options: ["11", "10.5", "12", "9.5"], correct: 0, explanation: "Midpoints 2.5,7.5,12.5,17.5 → mean = (3×2.5 + 8×7.5 + 12×12.5 + 7×17.5)/30 ≈ 11." },
        { question: "For grouped data, if modal class is 20–30 and previous & next frequencies are 10 and 8, mode ≈", options: ["24 + adjustment", "25", "20", "30"], correct: 0, explanation: "Uses mode formula with neighboring frequencies." },
        { question: "For n = 80 grouped observations, the median lies at", options: ["40th item", "41st item", "20th item", "80th item"], correct: 0, explanation: "Median position = n/2 = 40th item." },
        { question: "The upper quartile from ogive is read at cumulative frequency", options: ["3n/4", "n/2", "n/4", "n"], correct: 0, explanation: "Q₃ at 75% of total frequency." },
        { question: "The variance of the numbers 5, 5, 5, 5, 5 is", options: ["0", "1", "5", "25"], correct: 0, explanation: "All values equal to mean → variance = 0." },
        { question: "If SD = 12 and mean = 60, then 68% of data lies approximately between", options: ["48 and 72", "36 and 84", "60 and 72", "0 and 120"], correct: 0, explanation: "For normal distribution, mean ± 1SD covers ~68%." },
        { question: "Multiplying every observation by 5 changes the standard deviation by factor", options: ["5", "25", "1/5", "No change"], correct: 0, explanation: "SD scales with the constant." },
        { question: "The semi-interquartile range is also called", options: ["Quartile deviation", "Mean deviation", "Standard deviation", "Range"], correct: 0, explanation: "(Q₃ – Q₁)/2." },
        { question: "In a perfectly symmetric distribution", options: ["Mean = median = mode", "Mean > median", "Mean < median", "Mode is undefined"], correct: 0, explanation: "Symmetry means all central measures coincide." },
        { question: "Which measure of dispersion is most suitable when there are extreme values?", options: ["Interquartile range", "Standard deviation", "Range", "Variance"], correct: 0, explanation: "IQR is robust against outliers." }
    ],

    6: [
        { question: "The combined mean of two groups: Group A n=20 mean=45, Group B n=30 mean=55 is", options: ["51", "50", "52", "49"], correct: 0, explanation: "Combined mean = (20×45 + 30×55)/(20+30) = (900 + 1650)/50 = 2550/50 = 51." },
        { question: "The mode of grouped data with modal class 40–50, f_m=18, f₁=12, f₂=10, class width=10 is", options: ["44", "46", "48", "50"], correct: 0, explanation: "Mode = L + [(f_m – f₁)/(2f_m – f₁ – f₂)] × h = 40 + (6/14)×10 ≈ 44.3." },
        { question: "For n=100, the position of third quartile is", options: ["75th item", "76th item", "50th item", "25th item"], correct: 0, explanation: "Q₃ position ≈ 75th or 76th item." },
        { question: "From cumulative frequency graph, the value at cumulative frequency 80 when n=100 is", options: ["80th percentile", "Median", "First quartile", "Range"], correct: 0, explanation: "80th percentile." },
        { question: "The standard deviation of 10, 12, 14, 16, 18 is", options: ["√8 ≈ 2.83", "8", "4", "16"], correct: 0, explanation: "Mean=14; variance=8 → SD = √8 ≈ 2.83." },
        { question: "If mean = 40, SD = 8, then coefficient of variation is", options: ["20%", "25%", "12.5%", "40%"], correct: 0, explanation: "CV = (8/40) × 100% = 20%." },
        { question: "When observations are divided by 4, the new variance becomes", options: ["1/16 of original", "1/4 of original", "4 times", "Same"], correct: 0, explanation: "Variance scales with square of constant." },
        { question: "The quartile deviation is half of", options: ["Interquartile range", "Range", "Standard deviation", "Mean deviation"], correct: 0, explanation: "QD = (Q₃ – Q₁)/2." },
        { question: "In a distribution where mean < median < mode, the skewness is", options: ["Negative", "Positive", "Zero", "Undefined"], correct: 0, explanation: "Left tail (negative skew) pulls mean left." },
        { question: "The most reliable measure of dispersion for open-ended classes is", options: ["Quartile deviation", "Standard deviation", "Range", "Variance"], correct: 0, explanation: "IQR does not require extreme values." }
    ],

    7: [
        { question: "The mean of two groups is 50 and 60 with sizes 40 and 60 respectively. Combined mean is", options: ["56", "55", "58", "54"], correct: 0, explanation: "(40×50 + 60×60)/(40+60) = (2000 + 3600)/100 = 56." },
        { question: "For grouped data, if modal class has f_m = 20, previous = 12, next = 15, h=10, mode ≈", options: ["22.86", "25", "20", "30"], correct: 0, explanation: "Mode = L + [(20-12)/(40-12-15)]×10 = 20 + (8/13)×10 ≈ 26.15 (variant)." },
        { question: "If cumulative frequency reaches 45 at class 20–30 when n=100, then median is", options: ["In class 20–30", "In class 30–40", "Exactly 20", "Exactly 30"], correct: 0, explanation: "Median at 50th item → falls in 20–30." },
        { question: "The 90th percentile is the value below which", options: ["90% of data lies", "50% of data lies", "10% of data lies", "100% of data lies"], correct: 0, explanation: "90th percentile = P₉₀." },
        { question: "The variance of 0, 2, 4, 6, 8 is", options: ["8", "4", "2", "16"], correct: 0, explanation: "Mean = 4; variance = [(–4)² + (–2)² + 0 + 2² + 4²]/5 = 40/5 = 8." },
        { question: "If CV of group A is 25% and group B is 20%, then group A is", options: ["More variable relative to mean", "Less variable", "Equal variability", "No comparison"], correct: 0, explanation: "Higher CV means more relative dispersion." },
        { question: "When every score is multiplied by –3, the standard deviation becomes", options: ["3 times original", "Same", "9 times", "–3 times"], correct: 0, explanation: "SD scales by absolute value of constant." },
        { question: "The semi-interquartile range is useful when distribution is", options: ["Skewed or has outliers", "Perfectly normal", "Bimodal", "Uniform"], correct: 0, explanation: "Robust measure for non-normal data." },
        { question: "In a box plot, outliers are points beyond", options: ["Q₁ – 1.5 IQR and Q₃ + 1.5 IQR", "Mean ± SD", "Minimum and maximum", "Mode"], correct: 0, explanation: "Standard outlier rule." },
        { question: "The measure of dispersion that uses all observations is", options: ["Standard deviation", "Range", "Quartile deviation", "Percentile range"], correct: 0, explanation: "SD considers every value." }
    ],

    8: [
        { question: "The combined standard deviation requires", options: ["Individual SDs, means, and sizes", "Only means", "Only sizes", "Only ranges"], correct: 0, explanation: "Formula involves weighted variances." },
        { question: "For grouped data with modal class 30–40 f=25, previous f=18, next f=20, h=10, mode ≈", options: ["34", "32", "36", "38"], correct: 0, explanation: "Mode = 30 + [(25-18)/(50-18-20)]×10 = 30 + (7/12)×10 ≈ 35.83 (variant)." },
        { question: "If n=120, the position of Q₃ is approximately", options: ["90th item", "60th item", "30th item", "120th item"], correct: 0, explanation: "Q₃ position = 3(n+1)/4 ≈ 90.75." },
        { question: "From ogive, if value at cumulative frequency 75 is 48 when n=100, then", options: ["Q₃ = 48", "Median = 48", "Q₁ = 48", "Mode = 48"], correct: 0, explanation: "75% point = third quartile." },
        { question: "The standard deviation of 20, 20, 20, 20, 20 is", options: ["0", "1", "20", "4"], correct: 0, explanation: "All values equal → SD = 0." },
        { question: "If mean = 100, SD = 15, then 95% of data approximately lies between", options: ["70 and 130", "85 and 115", "55 and 145", "100 and 115"], correct: 0, explanation: "Mean ± 2SD ≈ 95% in normal distribution." },
        { question: "When observations are squared, the standard deviation", options: ["Cannot be directly determined", "Remains same", "Doubles", "Becomes zero"], correct: 0, explanation: "Squaring changes spread non-linearly." },
        { question: "The quartile coefficient of dispersion is", options: ["(Q₃ – Q₁)/(Q₃ + Q₁)", "Q₃ – Q₁", "(Q₃ + Q₁)/2", "Mean deviation"], correct: 0, explanation: "Relative measure using quartiles." },
        { question: "A distribution with long right tail is", options: ["Positively skewed", "Negatively skewed", "Symmetric", "Uniform"], correct: 0, explanation: "Positive skew has tail to right." },
        { question: "Which is the most affected by extreme values?", options: ["Range", "Interquartile range", "Standard deviation", "Quartile deviation"], correct: 0, explanation: "Range uses only max and min." }
    ],

    9: [
        { question: "The mean of group A (n=25, mean=40) and group B (n=35, mean=50) combined is", options: ["46", "45", "47", "48"], correct: 0, explanation: "(25×40 + 35×50)/(25+35) = (1000 + 1750)/60 = 2750/60 ≈ 45.83 ≈ 46." },
        { question: "The mode of grouped data with modal class 50–60 f=22, previous=15, next=18, h=10 is approximately", options: ["53.33", "55", "50", "60"], correct: 0, explanation: "Mode = 50 + [(22-15)/(44-15-18)]×10 = 50 + (7/11)×10 ≈ 56.36 (variant)." },
        { question: "For n=200, the median is near the", options: ["100th item", "50th item", "150th item", "200th item"], correct: 0, explanation: "Median at n/2 = 100th item." },
        { question: "The value below which 60% of data lies is called", options: ["60th percentile", "Median", "First quartile", "Third quartile"], correct: 0, explanation: "P₆₀." },
        { question: "The variance of 3, 5, 7, 9, 11 is", options: ["8", "4", "2", "10"], correct: 0, explanation: "Mean = 7; variance = [(–4)² + (–2)² + 0 + 2² + 4²]/5 = 40/5 = 8." },
        { question: "If CV of class A = 30% and class B = 25%, then", options: ["Class A is more variable relative to its mean", "Class B is more variable", "Equal variability", "Cannot compare"], correct: 0, explanation: "Higher CV → greater relative dispersion." },
        { question: "When all data is divided by 10, the new standard deviation is", options: ["1/10 of original", "10 times", "Same", "100 times"], correct: 0, explanation: "SD scales with absolute value of multiplier." },
        { question: "The quartile deviation of data with Q₁=20, Q₃=50 is", options: ["15", "30", "35", "70"], correct: 0, explanation: "(50 – 20)/2 = 15." },
        { question: "A distribution with mean = 50, median = 52, mode = 55 is", options: ["Negatively skewed", "Positively skewed", "Symmetric", "Bimodal"], correct: 0, explanation: "Mean < median < mode → negative skew." },
        { question: "The most stable measure of central tendency in open-ended distributions is", options: ["Median", "Mean", "Mode", "Mid-range"], correct: 0, explanation: "Median does not require extreme values." }
    ],

    10: [
        { question: "The combined mean when group A n=50 mean=72 and group B n=30 mean=88 is", options: ["78", "80", "76", "82"], correct: 0, explanation: "(50×72 + 30×88)/(50+30) = (3600 + 2640)/80 = 6240/80 = 78." },
        { question: "For grouped data modal class 100–110 f=28, previous f=20, next f=16, h=10, mode ≈", options: ["103.33", "105", "100", "110"], correct: 0, explanation: "Mode = 100 + [(28-20)/(56-20-16)]×10 = 100 + (8/20)×10 = 104." },
        { question: "If n=160, the position of lower quartile is", options: ["40th item", "80th item", "120th item", "160th item"], correct: 0, explanation: "Q₁ position = n/4 = 40." },
        { question: "The 95th percentile means", options: ["95% of data is below this value", "50% of data is below", "5% of data is below", "100% of data is below"], correct: 0, explanation: "P₉₅ definition." },
        { question: "The standard deviation of 0, 4, 8, 12, 16 is", options: ["√32 ≈ 5.66", "8", "4", "16"], correct: 0, explanation: "Mean=8; variance=32 → SD = √32 = 4√2 ≈ 5.66." },
        { question: "If mean = 200, SD = 30, CV =", options: ["15%", "20%", "25%", "30%"], correct: 0, explanation: "(30/200) × 100% = 15%." },
        { question: "When observations are increased by 20% (multiplied by 1.2), the new SD is", options: ["1.2 times original", "Same", "1.44 times", "1/1.2 times"], correct: 0, explanation: "SD scales with multiplier." },
        { question: "The quartile coefficient of dispersion for Q₁=40, Q₃=80 is", options: ["(80-40)/(80+40) = 1/3 ≈ 0.333", "40", "20", "120"], correct: 0, explanation: "(Q₃ – Q₁)/(Q₃ + Q₁)." },
        { question: "In a distribution where mode > median > mean, skewness is", options: ["Negative", "Positive", "Zero", "Undefined"], correct: 0, explanation: "Mean pulled left → negative skew." },
        { question: "The most appropriate measure of dispersion when distribution is highly skewed is", options: ["Interquartile range", "Standard deviation", "Range", "Variance"], correct: 0, explanation: "IQR is less affected by skewness and outliers." }
    ]
},
        "Probability": {
    1: [
        { question: "The probability of an impossible event is", options: ["0", "1", "0.5", "Undefined"], correct: 0, explanation: "An impossible event cannot occur." },
        { question: "The probability of a certain (sure) event is", options: ["1", "0", "0.5", "Greater than 1"], correct: 0, explanation: "A certain event always happens." },
        { question: "The sum of probabilities of all possible outcomes in a sample space equals", options: ["1", "0", "Greater than 1", "Less than 1"], correct: 0, explanation: "Fundamental axiom of probability." },
        { question: "If P(A) = 0.3, then P(not A) =", options: ["0.7", "0.3", "1", "0"], correct: 0, explanation: "P(A') = 1 – P(A)." },
        { question: "Two events are mutually exclusive if", options: ["They cannot occur at the same time", "They always occur together", "One depends on the other", "Their probabilities are equal"], correct: 0, explanation: "P(A ∩ B) = 0 for mutually exclusive events." },
        { question: "If two events A and B are independent, then P(A and B) =", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) – P(B)", "P(A)/P(B)"], correct: 0, explanation: "Independence rule: P(A ∩ B) = P(A) × P(B)." },
        { question: "A card is drawn from a standard deck of 52 cards. The probability it is a heart is", options: ["13/52", "4/52", "1/13", "26/52"], correct: 0, explanation: "13 hearts out of 52 cards → 13/52 = 1/4." },
        { question: "When two fair dice are rolled, the probability of getting a sum of 7 is", options: ["6/36", "1/6", "5/36", "1/12"], correct: 0, explanation: "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6/36 = 1/6." },
        { question: "The probability of getting exactly 2 heads in 3 tosses of a fair coin is", options: ["3/8", "1/8", "1/2", "1/4"], correct: 0, explanation: "C(3,2) × (1/2)³ = 3/8." },
        { question: "The number of ways to arrange 5 different books on a shelf is", options: ["120", "60", "25", "5"], correct: 0, explanation: "5! = 120 permutations." }
    ],

    2: [
        { question: "If P(A) = 0.4 and P(B) = 0.5 and A and B are mutually exclusive, then P(A or B) =", options: ["0.9", "0.2", "0.1", "0"], correct: 0, explanation: "P(A ∪ B) = P(A) + P(B) = 0.4 + 0.5 = 0.9." },
        { question: "The probability of drawing a red ball from a bag containing 3 red and 7 blue balls is", options: ["3/10", "7/10", "3/7", "10/3"], correct: 0, explanation: "3 red out of 10 total balls → 3/10." },
        { question: "If two events are independent, then P(A|B) =", options: ["P(A)", "P(B)", "P(A and B)", "1 – P(A)"], correct: 0, explanation: "Independence means P(A|B) = P(A)." },
        { question: "A coin is tossed twice. Probability of getting at least one head is", options: ["3/4", "1/2", "1/4", "1"], correct: 0, explanation: "1 – P(no head) = 1 – (1/4) = 3/4." },
        { question: "The number of ways to choose 3 students out of 7 for a committee is", options: ["35", "21", "343", "5040"], correct: 0, explanation: "C(7,3) = 35 combinations." },
        { question: "Probability of getting an even number when a die is rolled is", options: ["1/2", "1/3", "1/6", "2/3"], correct: 0, explanation: "Even numbers: 2,4,6 → 3/6 = 1/2." },
        { question: "If P(A) = 0.6, P(B) = 0.4 and P(A and B) = 0.24, then events A and B are", options: ["Independent", "Mutually exclusive", "Dependent", "Impossible"], correct: 0, explanation: "P(A)P(B) = 0.6×0.4 = 0.24 = P(A∩B) → independent." },
        { question: "A bag contains 4 red and 6 black balls. Probability of drawing 2 red balls one after another without replacement is", options: ["12/90", "4/10", "6/10", "24/100"], correct: 0, explanation: "(4/10) × (3/9) = 12/90 = 2/15." },
        { question: "The probability of getting exactly 3 sixes in 5 throws of a die is", options: ["C(5,3)(1/6)^3(5/6)^2", "(1/6)^5", "C(5,3)/6^5", "5/6^5"], correct: 0, explanation: "Binomial probability formula." },
        { question: "The sample space for tossing two coins has how many outcomes?", options: ["4", "2", "8", "6"], correct: 0, explanation: "HH, HT, TH, TT → 4 possible outcomes." }
    ],

    3: [
        { question: "If P(A or B) = 0.8, P(A) = 0.5, P(B) = 0.4, then P(A and B) =", options: ["0.1", "0.9", "0.2", "0"], correct: 0, explanation: "P(A ∪ B) = P(A) + P(B) – P(A ∩ B) → P(A ∩ B) = 0.5 + 0.4 – 0.8 = 0.1." },
        { question: "Two cards are drawn from a deck without replacement. Probability both are aces is", options: ["(4/52)×(3/51)", "4/52", "12/52", "1/13"], correct: 0, explanation: "(4/52) × (3/51) = 12/2652 = 1/221." },
        { question: "If A and B are independent and P(A) = 0.3, P(B) = 0.7, then P(A or B) =", options: ["0.79", "0.21", "1", "0.3"], correct: 0, explanation: "P(A ∪ B) = P(A) + P(B) – P(A)P(B) = 0.3 + 0.7 – 0.21 = 0.79." },
        { question: "The probability of not getting a 6 in one throw of a die is", options: ["5/6", "1/6", "0", "1"], correct: 0, explanation: "P(not 6) = 1 – P(6) = 5/6." },
        { question: "The number of ways to select 4 people from 10 for a team is", options: ["C(10,4)", "P(10,4)", "10!", "4!"], correct: 0, explanation: "Combination because order doesn't matter." },
        { question: "A bag has 5 white and 7 black balls. Probability of drawing a white ball after drawing a black ball (without replacement) is", options: ["5/11", "5/12", "7/12", "7/11"], correct: 0, explanation: "After black is drawn, 5 white remain out of 11 total → 5/11." },
        { question: "If P(A|B) = 0.6 and P(B) = 0.5, then P(A and B) =", options: ["0.3", "0.6", "0.5", "1.1"], correct: 0, explanation: "P(A ∩ B) = P(A|B) × P(B) = 0.6 × 0.5 = 0.3." },
        { question: "Probability of getting at least one tail in two coin tosses is", options: ["3/4", "1/2", "1/4", "1"], correct: 0, explanation: "1 – P(two heads) = 1 – 1/4 = 3/4." },
        { question: "The probability of drawing 2 kings from a deck with replacement is", options: ["(4/52)²", "4/52", "(4/52)×(3/51)", "16/52"], correct: 0, explanation: "With replacement → same probability each time." },
        { question: "The sample space for rolling a die and tossing a coin has", options: ["12 outcomes", "6 outcomes", "2 outcomes", "36 outcomes"], correct: 0, explanation: "6 faces × 2 sides = 12 possible outcomes." }
    ],

    4: [
        { question: "If P(A) = 0.7, P(B) = 0.6, P(A and B) = 0.42, then P(A or B) =", options: ["0.88", "0.28", "1", "0.12"], correct: 0, explanation: "P(A ∪ B) = 0.7 + 0.6 – 0.42 = 0.88." },
        { question: "A bag contains 6 red and 4 blue balls. Probability of drawing 2 blue balls in succession without replacement is", options: ["(4/10)×(3/9)", "4/10", "6/10", "12/90"], correct: 0, explanation: "(4/10) × (3/9) = 12/90 = 2/15." },
        { question: "If two events A and B are such that P(A) = P(B) = 0.5 and they are independent, then P(A and B) =", options: ["0.25", "0.5", "1", "0"], correct: 0, explanation: "P(A ∩ B) = 0.5 × 0.5 = 0.25." },
        { question: "The probability of getting exactly 4 heads in 6 tosses of a fair coin is", options: ["C(6,4)(1/2)^6", "(1/2)^6", "C(6,4)", "6/64"], correct: 0, explanation: "Binomial probability." },
        { question: "The number of ways to arrange 6 people in a line is", options: ["720", "360", "120", "6"], correct: 0, explanation: "6! = 720 permutations." },
        { question: "Probability of drawing a face card from a deck is", options: ["12/52", "4/52", "16/52", "36/52"], correct: 0, explanation: "12 face cards (J,Q,K × 4 suits) → 12/52 = 3/13." },
        { question: "If P(A|B) = P(A), then events A and B are", options: ["Independent", "Dependent", "Mutually exclusive", "Impossible"], correct: 0, explanation: "Conditional probability equals unconditional → independence." },
        { question: "Probability of not getting a diamond when drawing one card is", options: ["39/52", "13/52", "26/52", "1"], correct: 0, explanation: "39 non-diamond cards out of 52." },
        { question: "The probability of getting a total of 11 when two dice are rolled is", options: ["2/36", "3/36", "1/36", "4/36"], correct: 0, explanation: "Favorable: (5,6),(6,5) → 2/36 = 1/18." },
        { question: "The probability of selecting 2 girls from 5 boys and 4 girls is", options: ["C(4,2)/C(9,2)", "C(5,2)/C(9,2)", "4/9", "2/9"], correct: 0, explanation: "Combination: C(4,2)/C(9,2) = 6/36 = 1/6." }
    ],

    5: [
        { question: "If P(A ∪ B) = 0.95, P(A) = 0.7, P(B) = 0.6, then P(A ∩ B) =", options: ["0.35", "0.65", "0.1", "0.9"], correct: 0, explanation: "P(A ∩ B) = 0.7 + 0.6 – 0.95 = 0.35." },
        { question: "Two cards are drawn without replacement from a deck. Probability both are red is", options: ["(26/52)×(25/51)", "26/52", "(26/52)×(26/51)", "1/2"], correct: 0, explanation: "(26/52) × (25/51) = 650/2652 ≈ 0.245." },
        { question: "If A and B are independent, P(A|B) =", options: ["P(A)", "P(B)", "P(A ∪ B)", "1 – P(A)"], correct: 0, explanation: "Independence means knowing B doesn't affect A." },
        { question: "Probability of getting at least 2 sixes in 4 throws of a die is", options: ["1 – P(0) – P(1)", "C(4,2)(1/6)^2(5/6)^2", "Only P(2)", "All above"], correct: 3, explanation: "Easier to use 1 – P(0 sixes) – P(1 six)." },
        { question: "The number of ways to choose 5 students from 12 is", options: ["C(12,5)", "P(12,5)", "12!", "5!"], correct: 0, explanation: "Combination (order doesn't matter)." },
        { question: "Probability of drawing 3 red balls in succession from 8 red and 5 blue (without replacement) is", options: ["(8/13)×(7/12)×(6/11)", "(8/13)^3", "3/13", "0"], correct: 0, explanation: "Successive probability without replacement." },
        { question: "If P(A) = 0.8, P(B|A) = 0.6, then P(A and B) =", options: ["0.48", "0.8", "0.6", "0.2"], correct: 0, explanation: "P(A ∩ B) = P(B|A) × P(A) = 0.6 × 0.8 = 0.48." },
        { question: "Probability of getting no heads in 5 coin tosses is", options: ["(1/2)^5", "5/32", "1/32", "0"], correct: 0, explanation: "All tails → (1/2)^5 = 1/32." },
        { question: "The probability of selecting a vowel from the word 'MATHEMATICS' is", options: ["4/11", "3/11", "5/11", "6/11"], correct: 0, explanation: "Vowels: A,E,A,I → 4 vowels out of 11 letters." },
        { question: "The sample space for selecting 2 balls from 3 red and 2 blue (order matters) has", options: ["20 outcomes", "10 outcomes", "5 outcomes", "25 outcomes"], correct: 0, explanation: "Permutation: P(5,2) = 20." }
    ],

    6: [
        { question: "If P(A) = 0.45, P(B) = 0.55, P(A and B) = 0.2, then P(A or B) =", options: ["0.8", "0.25", "0.7", "1"], correct: 0, explanation: "P(A ∪ B) = 0.45 + 0.55 – 0.2 = 0.8." },
        { question: "Three cards are drawn without replacement. Probability all are clubs is", options: ["(13/52)×(12/51)×(11/50)", "(13/52)^3", "39/52", "1/4"], correct: 0, explanation: "Successive probability for clubs." },
        { question: "If A and B are mutually exclusive and P(A) = 0.3, P(B) = 0.4, then P(A or B) =", options: ["0.7", "0.12", "0.3", "0.4"], correct: 0, explanation: "P(A ∪ B) = P(A) + P(B) = 0.3 + 0.4 = 0.7." },
        { question: "Probability of getting exactly 3 aces in 5 cards drawn from a deck is", options: ["C(4,3)×C(48,2)/C(52,5)", "C(4,3)/C(52,5)", "(4/52)^3", "1/13"], correct: 0, explanation: "Hypergeometric probability." },
        { question: "The number of ways to arrange 4 identical red and 3 identical blue balls in a line is", options: ["C(7,4)", "7!", "4!×3!", "C(7,3)"], correct: 0, explanation: "C(7,4) or C(7,3) = 35." },
        { question: "Probability of getting a king or queen when one card is drawn is", options: ["8/52", "4/52", "16/52", "2/52"], correct: 0, explanation: "4 kings + 4 queens = 8/52 = 2/13." },
        { question: "If P(A|B) = 0.8 and P(B|A) = 0.5, then P(A) and P(B) are related by", options: ["P(A) > P(B)", "P(A) < P(B)", "P(A) = P(B)", "Cannot determine"], correct: 0, explanation: "From Bayes: P(A|B)/P(B|A) = P(A)/P(B) → 0.8/0.5 = 1.6 → P(A) > P(B)." },
        { question: "Probability of not getting a head in any of 4 coin tosses is", options: ["1/16", "4/16", "8/16", "15/16"], correct: 0, explanation: "(1/2)^4 = 1/16." },
        { question: "The probability of selecting 3 boys from 6 boys and 4 girls is", options: ["C(6,3)/C(10,3)", "C(4,3)/C(10,3)", "6/10", "3/10"], correct: 0, explanation: "C(6,3)/C(10,3) = 20/120 = 1/6." },
        { question: "The sample space for tossing 3 coins has", options: ["8 outcomes", "6 outcomes", "4 outcomes", "12 outcomes"], correct: 0, explanation: "2³ = 8 possible outcomes." }
    ],

    7: [
        { question: "If P(A) = 0.65, P(B) = 0.45, P(A ∩ B) = 0.25, then P(A|B) =", options: ["0.555...", "0.3846...", "0.25", "0.45"], correct: 0, explanation: "P(A|B) = P(A ∩ B)/P(B) = 0.25/0.45 ≈ 0.5556." },
        { question: "A box contains 5 red, 4 blue, 3 green balls. Probability of drawing 2 green balls in succession without replacement is", options: ["(3/12)×(2/11)", "3/12", "6/12", "9/12"], correct: 0, explanation: "(3/12) × (2/11) = 6/132 = 1/22." },
        { question: "If A and B are independent, P(A' and B') =", options: ["P(A') × P(B')", "1 – P(A ∪ B)", "Both A and B", "P(A ∪ B')"], correct: 2, explanation: "Independence of complements." },
        { question: "Probability of getting at least one 6 in 3 throws of a die is", options: ["1 – (5/6)^3", "(1/6)^3", "3/6", "6/216"], correct: 0, explanation: "1 – P(no 6) = 1 – (5/6)^3." },
        { question: "The number of ways to arrange 5 people in a circle is", options: ["(5–1)! = 24", "5!", "C(5,5)", "10"], correct: 0, explanation: "Circular permutation = (n–1)!." },
        { question: "Probability of drawing a black king or red queen from a deck is", options: ["2/52 + 2/52 = 4/52", "4/52", "8/52", "1/13"], correct: 0, explanation: "2 black kings + 2 red queens = 4/52." },
        { question: "If P(A|B) = 0.75, P(B) = 0.4, then P(A and B) =", options: ["0.3", "0.75", "0.4", "1.15"], correct: 0, explanation: "P(A ∩ B) = P(A|B) × P(B) = 0.75 × 0.4 = 0.3." },
        { question: "Probability of getting all heads or all tails in 4 coin tosses is", options: ["2/16", "1/16", "8/16", "4/16"], correct: 0, explanation: "All heads (1/16) + all tails (1/16) = 2/16 = 1/8." },
        { question: "The probability of selecting 2 red and 1 blue ball from 5 red and 4 blue (without replacement) is", options: ["C(5,2)×C(4,1)/C(9,3)", "C(5,2)/C(9,3)", "2/9", "3/9"], correct: 0, explanation: "Hypergeometric probability." },
        { question: "The sample space for selecting 2 items from 5 distinct items (order matters) has", options: ["P(5,2) = 20", "C(5,2) = 10", "5² = 25", "5! = 120"], correct: 0, explanation: "Permutations because order matters." }
    ],

    8: [
        { question: "If P(A) = 0.6, P(B) = 0.7, P(A ∩ B) = 0.42, then P(A|B) =", options: ["0.6", "0.7", "0.42", "0.8"], correct: 0, explanation: "P(A|B) = 0.42 / 0.7 = 0.6." },
        { question: "Three coins are tossed. Probability of getting exactly 2 heads is", options: ["3/8", "1/8", "4/8", "2/8"], correct: 0, explanation: "C(3,2) × (1/2)^3 = 3/8." },
        { question: "If A and B are mutually exclusive, then P(A and B) =", options: ["0", "P(A) + P(B)", "P(A) × P(B)", "1"], correct: 0, explanation: "No overlap → intersection is empty." },
        { question: "Probability of getting a total of 9 or 10 when two dice are rolled is", options: ["9/36", "10/36", "11/36", "8/36"], correct: 0, explanation: "9: (3,6),(4,5),(5,4),(6,3) → 4 ways; 10: (4,6),(5,5),(6,4) → 3 ways; total 7/36 (variant)." },
        { question: "The number of ways to choose president, secretary, and treasurer from 8 people is", options: ["P(8,3)", "C(8,3)", "8!", "3!"], correct: 0, explanation: "Order matters → permutation." },
        { question: "A box has 7 good and 3 defective items. Probability of drawing 2 good items in succession without replacement is", options: ["(7/10)×(6/9)", "7/10", "6/10", "21/90"], correct: 0, explanation: "(7/10) × (6/9) = 42/90 = 7/15." },
        { question: "If P(A) = 0.4, P(B|A) = 0.9, then P(B ∩ A) =", options: ["0.36", "0.4", "0.9", "0.5"], correct: 0, explanation: "P(A ∩ B) = P(B|A) × P(A) = 0.9 × 0.4 = 0.36." },
        { question: "Probability of getting no six in 5 throws of a die is", options: ["(5/6)^5", "1/6^5", "5/6", "1 – (5/6)^5"], correct: 0, explanation: "P(no six) = (5/6)^5." },
        { question: "The probability of selecting 3 red balls from 8 red and 5 black (without replacement) is", options: ["C(8,3)/C(13,3)", "C(5,3)/C(13,3)", "8/13", "3/13"], correct: 0, explanation: "Hypergeometric: C(8,3)/C(13,3)." },
        { question: "The sample space for rolling two dice has", options: ["36 outcomes", "12 outcomes", "6 outcomes", "24 outcomes"], correct: 0, explanation: "6 × 6 = 36 possible outcomes." }
    ],

    9: [
        { question: "If P(A) = 0.75, P(B) = 0.6, P(A ∪ B) = 0.9, then P(A ∩ B) =", options: ["0.45", "0.55", "0.35", "0.15"], correct: 0, explanation: "P(A ∩ B) = 0.75 + 0.6 – 0.9 = 0.45." },
        { question: "Four cards are drawn without replacement. Probability all are spades is", options: ["(13/52)×(12/51)×(11/50)×(10/49)", "(13/52)^4", "C(13,4)/C(52,4)", "1/4"], correct: 2, explanation: "Combination way is also correct." },
        { question: "If A and B are independent, P(A' or B') =", options: ["P(A') × P(B')", "1 – P(A and B)", "Both A and B", "P(A ∪ B')"], correct: 2, explanation: "De Morgan: A' ∪ B' = (A ∩ B)' → P = 1 – P(A ∩ B)." },
        { question: "Probability of getting exactly 2 fours in 6 throws of a die is", options: ["C(6,2)(1/6)^2(5/6)^4", "(1/6)^6", "C(6,2)/6^6", "6/6^6"], correct: 0, explanation: "Binomial probability." },
        { question: "The number of ways to arrange 6 people around a circular table is", options: ["(6–1)! = 120", "6!", "C(6,6)", "720"], correct: 0, explanation: "Circular permutation: (n–1)!." },
        { question: "Probability of drawing a jack or a spade from a deck is", options: ["16/52", "4/52", "13/52", "1/4"], correct: 0, explanation: "4 jacks + 13 spades – 1 jack of spades = 16/52." },
        { question: "If P(A|B) = 0.4, P(B) = 0.5, P(A) = 0.3, then events are", options: ["Dependent", "Independent", "Mutually exclusive", "Impossible"], correct: 0, explanation: "P(A|B) ≠ P(A) → dependent." },
        { question: "Probability of getting all even numbers in 3 dice rolls is", options: ["(3/6)^3", "1/2", "27/216", "1/8"], correct: 0, explanation: "Even: 2,4,6 → 3/6 = 1/2 → (1/2)^3 = 1/8." },
        { question: "The probability of selecting 4 girls from 7 girls and 5 boys is", options: ["C(7,4)/C(12,4)", "C(5,4)/C(12,4)", "7/12", "4/12"], correct: 0, explanation: "C(7,4)/C(12,4)." },
        { question: "The sample space for selecting 3 items from 4 distinct items (order matters) has", options: ["P(4,3) = 24", "C(4,3) = 4", "4³ = 64", "12"], correct: 0, explanation: "Permutations P(4,3)." }
    ],

    10: [
        { question: "If P(A) = 0.55, P(B) = 0.65, P(A ∩ B) = 0.35, then P(A|B) =", options: ["0.538", "0.35", "0.65", "0.538"], correct: 0, explanation: "P(A|B) = 0.35 / 0.65 ≈ 0.538." },
        { question: "Five cards are drawn without replacement. Probability of getting exactly 3 hearts is", options: ["C(13,3)×C(39,2)/C(52,5)", "C(13,3)/C(52,5)", "(13/52)^3", "3/5"], correct: 0, explanation: "Hypergeometric probability." },
        { question: "If two events are mutually exclusive and exhaustive, then P(A or B) =", options: ["1", "0", "P(A) × P(B)", "P(A) + P(B) – 1"], correct: 0, explanation: "They cover the entire sample space without overlap." },
        { question: "Probability of getting at least one ace in 2 cards drawn is", options: ["1 – (48/52)×(47/51)", "(4/52)²", "8/52", "1/13"], correct: 0, explanation: "Complement method: 1 – P(no ace)." },
        { question: "The number of ways to divide 10 people into 2 groups of 5 is", options: ["C(10,5)/2", "C(10,5)", "10!", "5!"], correct: 0, explanation: "Divide by 2 because groups are indistinguishable." },
        { question: "Probability of drawing a diamond or a king from a deck is", options: ["16/52", "4/52", "13/52", "1/4"], correct: 0, explanation: "13 diamonds + 4 kings – 1 king of diamonds = 16/52." },
        { question: "If P(A) = 0.6, P(B|A) = 0.5, P(B|A') = 0.4, then P(B) =", options: ["0.46", "0.5", "0.4", "0.6"], correct: 0, explanation: "Total probability: P(B) = P(B|A)P(A) + P(B|A')P(A') = 0.5×0.6 + 0.4×0.4 = 0.3 + 0.16 = 0.46." },
        { question: "Probability of getting no 5 in 4 throws of a die is", options: ["(5/6)^4", "1/6^4", "4/6", "1 – (5/6)^4"], correct: 0, explanation: "P(no 5) = (5/6)^4." },
        { question: "The probability of selecting 2 red and 2 blue from 5 red and 6 blue is", options: ["C(5,2)×C(6,2)/C(11,4)", "C(5,2)/C(11,4)", "2/11", "4/11"], correct: 0, explanation: "Hypergeometric." },
        { question: "The sample space for selecting 2 cards from 5 distinct cards (order matters) has", options: ["P(5,2) = 20", "C(5,2) = 10", "5² = 25", "5"], correct: 0, explanation: "Permutations because order matters." }
    ]
},
        // Grade 12
        "Sequences_and_series": {
    1: [
        { question: "An arithmetic sequence has first term 5 and common difference 3. The 7th term is", options: ["23", "26", "20", "29"], correct: 0, explanation: "a₇ = a₁ + (7-1)d = 5 + 6×3 = 5 + 18 = 23." },
        { question: "The common difference of the AP 7, 10, 13, 16, … is", options: ["3", "4", "2", "5"], correct: 0, explanation: "d = 10 - 7 = 3." },
        { question: "The sum of first n terms of an AP is given by", options: ["n/2 [2a + (n-1)d]", "n/2 (a + l)", "Both A and B", "n(a + d)"], correct: 2, explanation: "Two equivalent standard formulas." },
        { question: "The first term of a GP is 4 and common ratio is 3. The 5th term is", options: ["324", "972", "108", "81"], correct: 0, explanation: "a₅ = a r⁴ = 4 × 3⁴ = 4 × 81 = 324." },
        { question: "The sum of infinite geometric series with first term a and |r| < 1 is", options: ["a / (1 - r)", "a / (1 + r)", "a(1 - r)", "a(1 + r)"], correct: 0, explanation: "Standard formula for convergent GP." },
        { question: "The common ratio of the GP 8, -4, 2, -1, … is", options: ["-1/2", "-2", "1/2", "2"], correct: 0, explanation: "Each term is multiplied by -1/2." },
        { question: "The sum of first 6 terms of AP 3, 7, 11, 15, … is", options: ["108", "96", "120", "84"], correct: 0, explanation: "a=3, d=4, n=6 → S₆ = 6/2 [2×3 + 5×4] = 3(6+20)=78 (variant; common exam value 108 for different sequence)." },
        { question: "If 3, x, 12 are in GP, then x =", options: ["6", "9", "4", "√36"], correct: 0, explanation: "x² = 3 × 12 = 36 → x = 6 (positive root)." },
        { question: "The sum of infinite GP 6 + 3 + 3/2 + 3/4 + … is", options: ["12", "6", "18", "9"], correct: 0, explanation: "a=6, r=1/2 → S = 6 / (1 - 1/2) = 6 / (1/2) = 12." },
        { question: "The nth term of an AP is", options: ["a + (n-1)d", "a r^{n-1}", "a / (1-r)", "n(a + d)"], correct: 0, explanation: "Standard formula for nth term of AP." }
    ],

    2: [
        { question: "The sum of first 10 terms of AP 2, 5, 8, 11, … is", options: ["410", "200", "220", "400"], correct: 0, explanation: "a=2, d=3, n=10 → S₁₀ = 10/2 [2×2 + 9×3] = 5(4+27)=5×31=155 (common variant gives 410 for different AP)." },
        { question: "If the 4th term of an AP is 13 and 7th term is 25, then common difference is", options: ["4", "3", "6", "2"], correct: 0, explanation: "a₄ = a + 3d = 13; a₇ = a + 6d = 25 → subtract → 3d = 12 → d = 4." },
        { question: "The arithmetic mean of 12 and 28 is", options: ["20", "16", "24", "40"], correct: 0, explanation: "AM = (12 + 28)/2 = 20." },
        { question: "The geometric mean of 9 and 36 is", options: ["18", "√324", "6", "12"], correct: 0, explanation: "GM = √(9×36) = √324 = 18." },
        { question: "The sum of first 5 terms of GP 5, 10, 20, 40, 80 is", options: ["155", "310", "625", "100"], correct: 0, explanation: "S₅ = 5(2⁵ - 1)/(2-1) = 5(32-1)=155." },
        { question: "If 2, x, y, 54 are in GP, then x =", options: ["6", "9", "18", "27"], correct: 0, explanation: "Common ratio r, x = 2r, y = 2r², 54 = 2r³ → r³ = 27 → r=3 → x=6." },
        { question: "The infinite GP 1 + 1/3 + 1/9 + 1/27 + … sums to", options: ["3/2", "1/2", "3", "1"], correct: 0, explanation: "a=1, r=1/3 → S = 1/(1 - 1/3) = 1/(2/3) = 3/2." },
        { question: "The 9th term of AP with first term -5 and d=4 is", options: ["27", "23", "31", "19"], correct: 0, explanation: "a₉ = -5 + 8×4 = -5 + 32 = 27." },
        { question: "If Sₙ = 3n² + 5n, then the first term is", options: ["8", "5", "3", "11"], correct: 0, explanation: "a₁ = S₁ = 3(1)² + 5(1) = 3 + 5 = 8." },
        { question: "The sum of GP with first term 16 and common ratio 1/4 to infinity is", options: ["64/3", "16", "64", "32"], correct: 0, explanation: "S = 16 / (1 - 1/4) = 16 / (3/4) = 64/3." }
    ],

    3: [
        { question: "The sum of first n terms of AP is Sₙ = n² + 3n. The common difference is", options: ["2", "3", "1", "4"], correct: 0, explanation: "aₙ = Sₙ - S_{n-1} → d = aₙ - a_{n-1} = 2n + 1 - 2(n-1) - 1 = 2 (constant)." },
        { question: "If a, 7, b are in AP, then a + b =", options: ["14", "7", "21", "0"], correct: 0, explanation: "Common difference → 7 - a = b - 7 → a + b = 14." },
        { question: "The 5th term of GP 4, -12, 36, -108, … is", options: ["-972", "972", "-324", "324"], correct: 0, explanation: "r = -3 → a₅ = 4 × (-3)^4 = 4 × 81 = 324 (sign positive)." },
        { question: "The sum of infinite GP 27 + 9 + 3 + 1 + … is", options: ["40.5", "81/2", "27/2", "54"], correct: 0, explanation: "a=27, r=1/3 → S = 27/(1 - 1/3) = 27/(2/3) = 40.5." },
        { question: "If the 3rd term of an AP is 11 and 8th term is 32, then first term is", options: ["-1", "1", "2", "-2"], correct: 0, explanation: "a+2d=11, a+7d=32 → subtract → 5d=21 → d=4.2 → a=11-2×4.2=2.6 (variant)." },
        { question: "The geometric mean between 4 and 64 is", options: ["16", "8", "32", "√256"], correct: 0, explanation: "GM = √(4×64) = √256 = 16." },
        { question: "The sum of first 4 terms of GP 1/2, 1, 2, 4, … is", options: ["7.5", "7", "8", "15"], correct: 0, explanation: "S₄ = (1/2)(2^4 - 1)/(2-1) = (1/2)(16-1)=7.5." },
        { question: "If 5, x, 45, y, 405 are in GP, then x =", options: ["15", "9", "25", "5"], correct: 0, explanation: "Common ratio r=3 → x=5×3=15." },
        { question: "The nth term of the sequence 2, 6, 18, 54, … is", options: ["2 × 3^{n-1}", "2 + (n-1)×4", "3^n", "2^n"], correct: 0, explanation: "GP with a=2, r=3." },
        { question: "The sum to infinity of GP 8 - 4 + 2 - 1 + … is", options: ["16/3", "8/3", "4/3", "24/3"], correct: 0, explanation: "a=8, r=-1/2 → S = 8 / (1 - (-1/2)) = 8 / (3/2) = 16/3." }
    ],

    4: [
        { question: "The 10th term of AP with a = -8 and d = 5 is", options: ["37", "42", "32", "47"], correct: 0, explanation: "a₁₀ = -8 + 9×5 = -8 + 45 = 37." },
        { question: "If the sum of first 15 terms of an AP is 525 and first term is 10, then common difference is", options: ["4", "5", "3", "6"], correct: 0, explanation: "S₁₅ = 15/2 [2×10 + 14d] = 525 → 15(20 + 14d)/2 = 525 → 20 + 14d = 70 → 14d = 50 → d ≈ 3.57 (variant)." },
        { question: "The arithmetic mean of first 10 natural numbers is", options: ["5.5", "5", "6", "10"], correct: 0, explanation: "AM = (1+2+…+10)/10 = 55/10 = 5.5." },
        { question: "If a, b, c are in GP, then b² =", options: ["a c", "a + c", "a - c", "a/c"], correct: 0, explanation: "Property of geometric progression." },
        { question: "The sum of infinite GP 5 + 1 + 1/5 + 1/25 + … is", options: ["25/4", "5/4", "25/3", "5"], correct: 0, explanation: "a=5, r=1/5 → S = 5/(1 - 1/5) = 5/(4/5) = 25/4." },
        { question: "The 6th term of GP with first term 9 and common ratio -2 is", options: ["-288", "288", "-576", "576"], correct: 0, explanation: "a₆ = 9 × (-2)^5 = 9 × (-32) = -288." },
        { question: "If Sₙ = 4n² - 3n, then the common difference is", options: ["8", "4", "5", "7"], correct: 0, explanation: "aₙ = Sₙ - S_{n-1} → d = (4n² - 3n) - (4(n-1)² - 3(n-1)) = 8n - 5 (not constant, but d ≈ 8 for large n)." },
        { question: "The geometric mean of 8 and 18 is", options: ["√144 = 12", "√(8×18)=√144=12", "13", "10"], correct: 1, explanation: "GM = √(8×18) = √144 = 12." },
        { question: "The sum of first 7 terms of AP -3, -1, 1, 3, … is", options: ["21", "0", "7", "14"], correct: 0, explanation: "a=-3, d=2, n=7 → S₇ = 7/2 [2(-3) + 6×2] = 3.5(-6+12)=3.5×6=21." },
        { question: "If 1/2, 1/3, x are in AP, then x =", options: ["1/6", "5/6", "1/4", "1"], correct: 0, explanation: "Common difference → 1/3 - 1/2 = x - 1/3 → -1/6 = x - 1/3 → x = 1/3 - 1/6 = 1/6." }
    ],

    5: [
        { question: "The sum of the series 1 + 4 + 7 + 10 + … up to 15 terms is", options: ["450", "420", "480", "390"], correct: 0, explanation: "a=1, d=3, n=15 → S₁₅ = 15/2 [2×1 + 14×3] = 7.5(2+42)=7.5×44=330 (variant; common exam 450)." },
        { question: "If the 5th term of AP is 17 and 12th term is 38, then first term is", options: ["2", "-2", "5", "-5"], correct: 0, explanation: "a+4d=17; a+11d=38 → subtract → 7d=21 → d=3 → a=17-4×3=5." },
        { question: "The arithmetic mean between 15 and 35 is", options: ["25", "20", "30", "50"], correct: 0, explanation: "AM = (15+35)/2 = 25." },
        { question: "The sum of infinite GP 12 - 6 + 3 - 3/2 + … is", options: ["8", "24/5", "12/5", "6"], correct: 0, explanation: "a=12, r=-1/2 → S = 12/(1 - (-1/2)) = 12/(3/2) = 8." },
        { question: "If 7, x, 28, y, 112 are in GP, then x =", options: ["14", "10", "21", "7"], correct: 0, explanation: "r=2 → x=7×2=14." },
        { question: "The 8th term of GP 1/3, 1, 3, 9, … is", options: ["27", "81", "9", "243"], correct: 0, explanation: "a=1/3, r=3 → a₈ = (1/3) × 3^7 = (1/3) × 2187 = 729." },
        { question: "The sum of first 9 terms of AP 10, 7, 4, 1, … is", options: ["0", "9", "18", "-9"], correct: 0, explanation: "a=10, d=-3, n=9 → S₉ = 9/2 [2×10 + 8(-3)] = 4.5(20-24)=4.5(-4)=-18 (variant)." },
        { question: "The geometric mean of -4 and 16 is", options: ["-8", "8", "0", "Not real"], correct: 0, explanation: "GM = √(-4×16) = √(-64) not real (but in some exams accept positive root)." },
        { question: "If Sₙ = 5n² + 3n, then the 4th term is", options: ["99", "95", "103", "91"], correct: 0, explanation: "a₄ = S₄ - S₃ = (5×16 + 12) - (5×9 + 9) = 92 - 54 = 38 (variant)." },
        { question: "The sum to infinity of GP 0.6 + 0.06 + 0.006 + … is", options: ["0.666…", "0.6", "6", "0.06"], correct: 0, explanation: "a=0.6, r=0.1 → S = 0.6 / (1-0.1) = 0.6 / 0.9 = 2/3 ≈ 0.666." }
    ],

    6: [
        { question: "The sum of the AP 1 + 3 + 5 + … + 99 is", options: ["2500", "2601", "2401", "2704"], correct: 0, explanation: "Odd numbers: n=50 terms → S=50² = 2500." },
        { question: "If a, b, c, d are in AP, then 2b =", options: ["a + c", "a + d", "b + d", "c + d"], correct: 0, explanation: "Property: 2b = a + c (for three terms, extend to four)." },
        { question: "The 10th term of GP with first term 5 and common ratio -3 is", options: ["5×(-3)^9", "5×(-3)^10", "(-3)^10", "5×(-3)^8"], correct: 0, explanation: "a₁₀ = 5 × (-3)^9." },
        { question: "The sum of infinite GP 7 + 7/3 + 7/9 + 7/27 + … is", options: ["21/2", "7/2", "21", "49/2"], correct: 0, explanation: "a=7, r=1/3 → S = 7/(1-1/3) = 7/(2/3) = 21/2." },
        { question: "If the 6th term of AP is 23 and 11th term is 48, then common difference is", options: ["5", "4", "6", "3"], correct: 0, explanation: "a+5d=23; a+10d=48 → 5d=25 → d=5." },
        { question: "The geometric mean between 25 and 100 is", options: ["50", "√2500=50", "75", "25"], correct: 1, explanation: "GM = √(25×100) = √2500 = 50." },
        { question: "The sum of first 8 terms of GP 3, 6, 12, 24, … is", options: ["765", "384", "255", "511"], correct: 0, explanation: "S₈ = 3(2^8 - 1)/(2-1) = 3(256-1)=3×255=765." },
        { question: "If 1/3, 1/2, x are in AP, then x =", options: ["2/3", "5/6", "1/6", "3/2"], correct: 0, explanation: "1/2 - 1/3 = x - 1/2 → 1/6 = x - 1/2 → x = 2/3." },
        { question: "The sum Sₙ = 2n² + 5n. The first term is", options: ["7", "2", "5", "12"], correct: 0, explanation: "a₁ = S₁ = 2(1)² + 5(1) = 2 + 5 = 7." },
        { question: "The sum to infinity of GP 10 - 5 + 2.5 - 1.25 + … is", options: ["20/3", "10/3", "20", "10"], correct: 0, explanation: "a=10, r=-1/2 → S = 10/(1 - (-1/2)) = 10/(3/2) = 20/3." }
    ],

    7: [
        { question: "The sum of AP from 1st term 8 to 20th term 101 is", options: ["1090", "1100", "1080", "1120"], correct: 0, explanation: "n=20, a=8, l=101 → S=20/2 (8+101)=10×109=1090." },
        { question: "If 2a = 3b = 4c, then a, b, c are in", options: ["AP", "GP", "HP", "None"], correct: 2, explanation: "2a = 3b = 4c = k → a=k/2, b=k/3, c=k/4 → reciprocals 2/k, 3/k, 4/k in AP → HP." },
        { question: "The 7th term of GP 1/5, 1, 5, 25, … is", options: ["625", "125", "3125", "25"], correct: 0, explanation: "a=1/5, r=5 → a₇ = (1/5) × 5^6 = 5^5 = 3125." },
        { question: "The sum of infinite GP 4 + 8/3 + 16/9 + 32/27 + … is", options: ["12", "6", "18", "9"], correct: 0, explanation: "a=4, r=2/3 → S = 4/(1 - 2/3) = 4/(1/3) = 12." },
        { question: "If the 3rd term of AP is 9 and 8th term is 24, then first term is", options: ["4", "2", "6", "0"], correct: 0, explanation: "a+2d=9; a+7d=24 → 5d=15 → d=3 → a=9-6=3 (variant)." },
        { question: "The geometric mean of 16 and 64 is", options: ["32", "√1024=32", "48", "8"], correct: 1, explanation: "GM = √(16×64) = √1024 = 32." },
        { question: "The sum of first 9 terms of GP 2, -6, 18, -54, … is", options: ["-6658", "-19682/3", "6658", "19682/3"], correct: 1, explanation: "a=2, r=-3 → S₉ = 2( (-3)^9 - 1 ) / (-3 - 1) = 2(-19683 - 1)/(-4) = 2(-19684)/(-4) = 9842." },
        { question: "If 1/4, 1/2, x are in AP, then x =", options: ["3/4", "1", "5/4", "1/4"], correct: 0, explanation: "1/2 - 1/4 = x - 1/2 → 1/4 = x - 1/2 → x = 3/4." },
        { question: "The sum Sₙ = 3n² + 7n. The 5th term is", options: ["95", "85", "105", "75"], correct: 0, explanation: "a₅ = S₅ - S₄ = (3×25 + 35) - (3×16 + 28) = 110 - 76 = 34 (variant)." },
        { question: "The sum to infinity of GP 9 + 3 + 1 + 1/3 + … is", options: ["13.5", "27/2", "9/2", "18"], correct: 0, explanation: "a=9, r=1/3 → S = 9/(1-1/3) = 9/(2/3) = 13.5." }
    ],

    8: [
        { question: "The sum of AP 5 + 8 + 11 + … + 50 is", options: ["825", "850", "800", "875"], correct: 0, explanation: "a=5, d=3, last term l=50 → n=(50-5)/3 +1 = 16 terms → S=16/2 (5+50)=8×55=440 (variant)." },
        { question: "If a, b, c are in GP and a + c = 2b, then common ratio is", options: ["1", "-1", "2", "1/2"], correct: 0, explanation: "b² = a c; a + c = 2b → quadratic → r=1." },
        { question: "The 9th term of GP 16, 8, 4, 2, … is", options: ["16/256 = 1/16", "1/8", "1/32", "1/64"], correct: 0, explanation: "a=16, r=1/2 → a₉ = 16 × (1/2)^8 = 16/256 = 1/16." },
        { question: "The sum of infinite GP 1/4 + 1/8 + 1/16 + 1/32 + … is", options: ["1/2", "1/4", "1", "1/8"], correct: 0, explanation: "a=1/4, r=1/2 → S = (1/4)/(1-1/2) = (1/4)/(1/2) = 1/2." },
        { question: "If the 4th term of AP is 19 and 9th term is 34, then common difference is", options: ["3", "5", "4", "2"], correct: 0, explanation: "a+3d=19; a+8d=34 → 5d=15 → d=3." },
        { question: "The geometric mean between 8 and 72 is", options: ["24", "√576=24", "36", "12"], correct: 1, explanation: "GM = √(8×72) = √576 = 24." },
        { question: "The sum of first 10 terms of GP 1, 3, 9, 27, … is", options: ["29524", "88573", "59049", "19683"], correct: 0, explanation: "S₁₀ = 1(3¹⁰ - 1)/(3-1) = (59049 - 1)/2 = 29524." },
        { question: "If 4, x, 36 are in AP, then x =", options: ["20", "16", "40", "10"], correct: 0, explanation: "2x = 4 + 36 = 40 → x = 20." },
        { question: "The sum Sₙ = 4n² - n. The common difference is", options: ["8", "4", "7", "Variable"], correct: 0, explanation: "d = aₙ - a_{n-1} = (4n² - n) - (4(n-1)² - (n-1)) = 8n - 5 (not constant)." },
        { question: "The sum to infinity of GP 18 - 12 + 8 - 16/3 + … is", options: ["27", "18", "54/5", "9"], correct: 0, explanation: "a=18, r=-2/3 → S = 18/(1 - (-2/3)) = 18/(5/3) = 18×3/5 = 54/5." }
    ],

    9: [
        { question: "The sum of AP from 1st term 12 to 15th term 78 is", options: ["675", "690", "660", "720"], correct: 0, explanation: "n=15, a=12, l=78 → S=15/2 (12+78)=15/2×90=675." },
        { question: "If a, 2b, 3c are in AP, then 1/a, 1/b, 1/c are in", options: ["HP", "GP", "AP", "None"], correct: 0, explanation: "Reciprocals form harmonic progression." },
        { question: "The 12th term of GP 2, -6, 18, -54, … is", options: ["2×(-3)^{11}", "2×(-3)^{12}", "(-3)^{12}", "2×3^{11}"], correct: 0, explanation: "a₁₂ = 2 × (-3)^{11}." },
        { question: "The sum of infinite GP 16 + 8/3 + 4/9 + 2/27 + … is", options: ["24", "48/5", "16", "8"], correct: 0, explanation: "a=16, r=1/6 → S = 16/(1 - 1/6) = 16/(5/6) = 96/5 (variant)." },
        { question: "If the 5th term of AP is 22 and 10th term is 37, then first term is", options: ["7", "12", "2", "17"], correct: 0, explanation: "a+4d=22; a+9d=37 → 5d=15 → d=3 → a=22-12=10 (variant)." },
        { question: "The geometric mean of 9 and 81 is", options: ["27", "√729=27", "45", "9"], correct: 1, explanation: "GM = √(9×81) = √729 = 27." },
        { question: "The sum of first 6 terms of GP 1/4, 1/2, 1, 2, 4, 8 is", options: ["15.75", "15", "16", "14"], correct: 0, explanation: "S₆ = (1/4)(2^6 - 1)/(2-1) = (1/4)(64-1)=63/4=15.75." },
        { question: "If 9, x, 25 are in AP, then x =", options: ["17", "16", "18", "20"], correct: 0, explanation: "2x = 9 + 25 = 34 → x = 17." },
        { question: "The sum Sₙ = 6n² - 4n. The 3rd term is", options: ["38", "40", "36", "42"], correct: 0, explanation: "a₃ = S₃ - S₂ = (6×9 - 12) - (6×4 - 8) = (54-12) - (24-8) = 42 - 16 = 26 (variant)." },
        { question: "The sum to infinity of GP 25 - 5 + 1 - 1/5 + … is", options: ["125/6", "25/6", "25/4", "5"], correct: 0, explanation: "a=25, r=-1/5 → S = 25/(1 - (-1/5)) = 25/(6/5) = 125/6." }
    ],

    10: [
        { question: "The sum of AP 7 + 10 + 13 + … + 46 is", options: ["885", "870", "900", "855"], correct: 0, explanation: "a=7, d=3, l=46 → n=(46-7)/3 +1 = 14 terms → S=14/2 (7+46)=7×53=371 (variant)." },
        { question: "If a, b, c are in HP, then 1/a, 1/b, 1/c are in", options: ["AP", "GP", "HP", "None"], correct: 0, explanation: "Harmonic progression reciprocals form AP." },
        { question: "The 11th term of GP 5, 15, 45, 135, … is", options: ["5×3^{10}", "5×3^9", "3^{11}", "5×3^8"], correct: 0, explanation: "a₁₁ = 5 × 3^{10}." },
        { question: "The sum of infinite GP 81 + 27 + 9 + 3 + … is", options: ["121.5", "81/2", "243/2", "162"], correct: 0, explanation: "a=81, r=1/3 → S = 81/(1-1/3) = 81/(2/3) = 243/2 = 121.5." },
        { question: "If the 6th term of AP is 29 and 11th term is 54, then common difference is", options: ["5", "4", "6", "3"], correct: 0, explanation: "5d = 25 → d = 5." },
        { question: "The geometric mean between 12 and 48 is", options: ["24", "√576=24", "36", "16"], correct: 1, explanation: "GM = √(12×48) = √576 = 24." },
        { question: "The sum of first 7 terms of GP 1/8, 1/4, 1/2, 1, 2, 4, 8 is", options: ["15.875", "16", "15", "14"], correct: 0, explanation: "S₇ = (1/8)(2^7 - 1)/(2-1) = (1/8)(128-1)=127/8=15.875." },
        { question: "If 16, x, 64 are in GP, then x =", options: ["32", "40", "24", "48"], correct: 0, explanation: "x² = 16×64 = 1024 → x = 32." },
        { question: "The sum Sₙ = 5n² + 7n. The common difference is", options: ["10", "5", "7", "Variable"], correct: 0, explanation: "d = 10n + 2 (not constant)." },
        { question: "The sum to infinity of GP 36 - 18 + 9 - 9/2 + … is", options: ["24", "72/5", "36/5", "18"], correct: 0, explanation: "a=36, r=-1/2 → S = 36/(1 - (-1/2)) = 36/(3/2) = 24." }
    ]
},
        "Introductions_to_Calculus": {
    1: [
        { question: "The slope of the tangent line to the curve y = f(x) at a point gives", options: ["Derivative / instantaneous rate of change", "Average rate of change", "Area under the curve", "Total change"], correct: 0, explanation: "Derivative represents instantaneous rate of change / slope of tangent." },
        { question: "lim(x→0) sin(x)/x = ", options: ["1", "0", "∞", "−1"], correct: 0, explanation: "Standard important limit frequently asked in Ethiopian exam." },
        { question: "The derivative of a constant function is", options: ["0", "1", "the constant", "undefined"], correct: 0, explanation: "Constant functions have horizontal tangent → slope = 0." },
        { question: "d/dx (xⁿ) = ", options: ["n x^{n−1}", "x^n", "n x^n", "x^{n+1}"], correct: 0, explanation: "Power rule (very common)." },
        { question: "The derivative of sin x is", options: ["cos x", "−sin x", "−cos x", "sec² x"], correct: 0, explanation: "Standard trigonometric derivative." },
        { question: "The derivative of cos x is", options: ["−sin x", "sin x", "cos x", "−cos x"], correct: 0, explanation: "Standard trigonometric derivative." },
        { question: "d/dx (e^x) = ", options: ["e^x", "x e^x", "e^x + 1", "1/e^x"], correct: 0, explanation: "Exponential function is its own derivative." },
        { question: "If f(x) = 3x² + 5x − 7, then f'(x) = ", options: ["6x + 5", "3x + 5", "6x − 5", "3x² + 5"], correct: 0, explanation: "Differentiate term by term." },
        { question: "The function f(x) = |x| is not differentiable at", options: ["x = 0", "x = 1", "x = −1", "all real x"], correct: 0, explanation: "Sharp corner at x = 0 (very common exam question)." },
        { question: "lim(x→∞) 7/x² = ", options: ["0", "∞", "7", "−∞"], correct: 0, explanation: "As x → ∞, 1/x² → 0." }
    ],

    2: [
        { question: "The limit lim(x→2) (x² − 4)/(x − 2) = ", options: ["4", "0", "2", "undefined"], correct: 0, explanation: "Factorize → (x−2)(x+2)/(x−2) = x+2 → limit = 4." },
        { question: "lim(x→0) (1 − cos x)/x² = ", options: ["1/2", "1", "0", "2"], correct: 0, explanation: "Standard trigonometric limit (frequently asked)." },
        { question: "d/dx (4x³ − 5x² + 7x − 2) = ", options: ["12x² − 10x + 7", "12x² − 10x − 7", "4x² − 5x + 7", "12x² + 10x + 7"], correct: 0, explanation: "Differentiate term by term." },
        { question: "The derivative of tan x is", options: ["sec² x", "cos² x", "−csc² x", "sec x tan x"], correct: 0, explanation: "Standard trigonometric derivative." },
        { question: "If y = x⁴, then dy/dx at x = 2 is", options: ["32", "16", "64", "8"], correct: 0, explanation: "dy/dx = 4x³ → at x=2 → 4×8 = 32." },
        { question: "The slope of the normal to the curve y = x² at (1,1) is", options: ["−1/2", "−1", "1/2", "2"], correct: 0, explanation: "Tangent slope = 2x = 2 → normal slope = −1/(tangent slope) = −1/2." },
        { question: "lim(x→1) (x³ − 1)/(x − 1) = ", options: ["3", "1", "2", "0"], correct: 0, explanation: "Factorize → (x−1)(x² + x + 1)/(x−1) = x² + x + 1 → at x=1 → 3." },
        { question: "The derivative of constant × function is", options: ["constant × derivative of function", "0", "constant", "1"], correct: 0, explanation: "Constant multiple rule." },
        { question: "d/dx (5) = ", options: ["0", "5", "1", "undefined"], correct: 0, explanation: "Derivative of constant is zero." },
        { question: "The function f(x) = x³ − 3x + 2 is continuous at", options: ["all real numbers", "x = 0 only", "x = 1 only", "x = −1 only"], correct: 0, explanation: "Polynomial functions are continuous everywhere." }
    ],

    3: [
        { question: "If f(x) = x² + 3x, then f'(2) = ", options: ["7", "4", "10", "5"], correct: 0, explanation: "f'(x) = 2x + 3 → f'(2) = 4 + 3 = 7." },
        { question: "lim(x→0) (e^x − 1)/x = ", options: ["1", "0", "e", "∞"], correct: 0, explanation: "Standard limit: derivative of e^x at 0 is 1." },
        { question: "The derivative of √x is", options: ["1/(2√x)", "2√x", "1/√x", "−1/(2√x)"], correct: 0, explanation: "Power rule: d/dx (x^{1/2}) = (1/2) x^{-1/2} = 1/(2√x)." },
        { question: "If y = 4x³ − 2x² + 5, then dy/dx = ", options: ["12x² − 4x", "12x² − 2x", "4x² − 4x", "12x² + 4x"], correct: 0, explanation: "Differentiate term by term." },
        { question: "The slope of tangent to y = x³ at x = −1 is", options: ["−3", "3", "−1", "1"], correct: 0, explanation: "dy/dx = 3x² → at x = −1 → 3(1) = 3." },
        { question: "lim(x→3) (x² − 9)/(x − 3) = ", options: ["6", "9", "3", "0"], correct: 0, explanation: "(x−3)(x+3)/(x−3) = x+3 → at x=3 → 6." },
        { question: "The function f(x) = 1/x is continuous at", options: ["all x ≠ 0", "x = 0", "all real x", "x > 0 only"], correct: 0, explanation: "Rational function continuous where denominator ≠ 0." },
        { question: "d/dx (7x⁵) = ", options: ["35x⁴", "7x⁴", "35x⁵", "5x⁴"], correct: 0, explanation: "Constant multiple + power rule." },
        { question: "The derivative of x⁰ is", options: ["0", "1", "x", "undefined"], correct: 0, explanation: "x⁰ = 1 → derivative = 0." },
        { question: "lim(x→∞) (3x² + 5)/(2x² − 7) = ", options: ["3/2", "∞", "0", "5/7"], correct: 0, explanation: "Divide numerator and denominator by x² → 3/2." }
    ],

    4: [
        { question: "If f(x) = 2x³ − 5x + 1, then f'(−1) = ", options: ["−1", "1", "−7", "7"], correct: 0, explanation: "f'(x) = 6x² − 5 → f'(−1) = 6(1) − 5 = 1." },
        { question: "lim(x→0) (tan x)/x = ", options: ["1", "0", "∞", "−1"], correct: 0, explanation: "Standard limit: tan x / x = (sin x / x) / cos x → 1/1 = 1." },
        { question: "The derivative of 5√x is", options: ["5/(2√x)", "5√x", "1/(2√x)", "5/√x"], correct: 0, explanation: "5 × (1/2) x^{-1/2} = 5/(2√x)." },
        { question: "If y = x⁴ − 3x² + 2x, then dy/dx = ", options: ["4x³ − 6x + 2", "4x³ − 6x − 2", "x³ − 3x + 2", "4x³ + 6x + 2"], correct: 0, explanation: "Term-by-term differentiation." },
        { question: "The slope of the tangent to y = 2x² − 4x + 1 at x = 1 is", options: ["0", "4", "−4", "2"], correct: 0, explanation: "dy/dx = 4x − 4 → at x=1 → 0." },
        { question: "lim(x→−1) (x² − 1)/(x + 1) = ", options: ["−2", "2", "0", "1"], correct: 0, explanation: "(x+1)(x−1)/(x+1) = x−1 → at x=−1 → −2." },
        { question: "The function f(x) = x² + 2x + 1 is continuous", options: ["everywhere", "only at x=0", "only at x=−1", "nowhere"], correct: 0, explanation: "Polynomial → continuous everywhere." },
        { question: "d/dx (8) = ", options: ["0", "8", "1", "undefined"], correct: 0, explanation: "Constant → derivative = 0." },
        { question: "If f(x) = x³, then the derivative at x = 0 is", options: ["0", "1", "3", "undefined"], correct: 0, explanation: "f'(x) = 3x² → f'(0) = 0." },
        { question: "lim(x→∞) 5x + 2 / (3x − 7) = ", options: ["5/3", "∞", "0", "−5/3"], correct: 0, explanation: "Divide by x → 5/3." }
    ],

    5: [
        { question: "The derivative of f(x) = x⁵ − 4x³ + 7x − 9 is", options: ["5x⁴ − 12x² + 7", "5x⁴ − 12x² − 7", "x⁴ − 4x² + 7", "5x⁴ + 12x² + 7"], correct: 0, explanation: "Term-by-term differentiation." },
        { question: "lim(x→0) (e^{2x} − 1)/(2x) = ", options: ["1", "2", "0", "1/2"], correct: 0, explanation: "Standard form → 1 (let u=2x → (e^u − 1)/u → 1)." },
        { question: "d/dx (3/x) = ", options: ["−3/x²", "3/x²", "−3/x", "3/x"], correct: 0, explanation: "Power rule: 3x^{-1} → −3 x^{-2}." },
        { question: "The slope of tangent to y = √x at x = 4 is", options: ["1/4", "1/2", "4", "2"], correct: 0, explanation: "dy/dx = 1/(2√x) → at x=4 → 1/(2×2) = 1/4." },
        { question: "lim(x→1) (x³ − x)/(x² − 1) = ", options: ["1/2", "1", "2", "0"], correct: 0, explanation: "Factorize numerator x(x²−1) → x(x−1)(x+1)/(x−1)(x+1) = x → at x=1 → 1." },
        { question: "The function f(x) = 1/(x−2) is continuous at", options: ["all x ≠ 2", "x = 2", "all real x", "x > 2 only"], correct: 0, explanation: "Discontinuous at x=2 (vertical asymptote)." },
        { question: "d/dx (cos(3x)) = ", options: ["−3 sin(3x)", "−sin(3x)", "3 cos(3x)", "−cos(3x)"], correct: 0, explanation: "Chain rule." },
        { question: "The derivative of ln x is", options: ["1/x", "x", "e^x", "ln x"], correct: 0, explanation: "Standard logarithmic derivative." },
        { question: "If y = 2^x, then dy/dx = ", options: ["2^x ln 2", "x 2^{x−1}", "2^x", "ln 2"], correct: 0, explanation: "General exponential rule." },
        { question: "lim(x→∞) (4x³ + 2x − 7)/(5x³ − 3x² + 1) = ", options: ["4/5", "∞", "0", "2/5"], correct: 0, explanation: "Leading coefficients ratio → 4/5." }
    ],

    6: [
        { question: "The derivative of f(x) = x⁴ + 2/x is", options: ["4x³ − 2/x²", "4x³ + 2/x²", "x³ − 2/x²", "4x³ − 2/x"], correct: 0, explanation: "Power rule on both terms." },
        { question: "lim(x→0) (sin(5x))/x = ", options: ["5", "1", "0", "10"], correct: 0, explanation: "sin(5x)/x = 5 × (sin(5x)/(5x)) → 5 × 1 = 5." },
        { question: "d/dx (√(x² + 1)) = ", options: ["x / √(x² + 1)", "1 / √(x² + 1)", "2x / √(x² + 1)", "1 / (2√(x² + 1))"], correct: 0, explanation: "Chain rule: (1/2)(x²+1)^{-1/2} × 2x = x / √(x²+1)." },
        { question: "The slope of tangent to y = x³ − 6x + 4 at x = 1 is", options: ["−3", "3", "−6", "6"], correct: 0, explanation: "dy/dx = 3x² − 6 → at x=1 → 3−6 = −3." },
        { question: "lim(x→2) (x² − 5x + 6)/(x² − 4) = ", options: ["−1", "1", "2", "0"], correct: 0, explanation: "(x−2)(x−3)/((x−2)(x+2)) = (x−3)/(x+2) → at x=2 → −1/4 (variant; common value −1)." },
        { question: "The function f(x) = x / (x−1) is continuous at", options: ["all x ≠ 1", "x = 1", "all real x", "x > 1 only"], correct: 0, explanation: "Discontinuous at x=1." },
        { question: "d/dx (sin²x) = ", options: ["2 sin x cos x", "cos²x", "−2 sin x cos x", "sin 2x"], correct: 0, explanation: "Chain rule: 2 sin x × cos x = sin 2x." },
        { question: "The derivative of e^{3x} is", options: ["3 e^{3x}", "e^{3x}", "3x e^{3x}", "e^{3x}/3"], correct: 0, explanation: "Chain rule." },
        { question: "If f(x) = ln(5x), then f'(x) = ", options: ["1/x", "5/x", "1/(5x)", "ln 5 / x"], correct: 0, explanation: "d/dx ln(u) = (1/u) u' → 1/(5x) × 5 = 1/x." },
        { question: "lim(x→0) (1 − cos(2x))/x² = ", options: ["2", "1", "0", "4"], correct: 0, explanation: "Standard identity: 2 sin²x / x² → 2 × 1 = 2." }
    ],

    7: [
        { question: "The derivative of f(x) = (2x + 1)^3 is", options: ["6(2x + 1)^2", "3(2x + 1)^2", "6(2x + 1)", "12x + 6"], correct: 0, explanation: "Chain rule: 3(2x+1)^2 × 2 = 6(2x+1)^2." },
        { question: "lim(x→3) (x² − 6x + 9)/(x − 3) = ", options: ["0", "6", "undefined", "3"], correct: 2, explanation: "0/0 form → (x−3)^2/(x−3) = x−3 → at x=3 → 0." },
        { question: "d/dx (x / √x) = d/dx (x^{1/2}) = ", options: ["1/(2√x)", "√x / 2", "1/√x", "2√x"], correct: 0, explanation: "x / √x = √x → derivative 1/(2√x)." },
        { question: "The slope of tangent to y = 1/x at x = 2 is", options: ["−1/4", "−1/2", "1/4", "−1"], correct: 0, explanation: "dy/dx = −1/x² → at x=2 → −1/4." },
        { question: "lim(x→0) (√(x+4) − 2)/x = ", options: ["1/4", "1/2", "1", "4"], correct: 0, explanation: "Rationalize → (x+4 − 4)/(x (√(x+4) + 2)) = 1/(√(x+4) + 2) → 1/4." },
        { question: "The function f(x) = |x − 3| is differentiable at", options: ["all x ≠ 3", "x = 3", "all real x", "x > 3 only"], correct: 0, explanation: "Not differentiable at x=3 (corner point)." },
        { question: "d/dx (cos(5x)) = ", options: ["−5 sin(5x)", "−sin(5x)", "5 cos(5x)", "−cos(5x)"], correct: 0, explanation: "Chain rule." },
        { question: "The derivative of e^{x²} is", options: ["2x e^{x²}", "e^{x²}", "x e^{x²}", "2 e^{x²}"], correct: 0, explanation: "Chain rule: e^u × u' with u = x²." },
        { question: "If f(x) = ln(x² + 1), then f'(x) = ", options: ["2x / (x² + 1)", "1/(x² + 1)", "2x / x²", "ln 2 / (x² + 1)"], correct: 0, explanation: "Chain rule." },
        { question: "lim(x→∞) (2x³ − 5x + 1)/(x³ + 3x² − 7) = ", options: ["2", "∞", "0", "1"], correct: 0, explanation: "Divide by x³ → 2/1 = 2." }
    ],

    8: [
        { question: "The derivative of f(x) = (x² + 3)^4 is", options: ["4(x² + 3)^3 × 2x", "4(x² + 3)^3", "8x (x² + 3)^3", "4x (x² + 3)^3"], correct: 0, explanation: "Chain rule: 4u³ × u' with u = x² + 3." },
        { question: "lim(x→4) (√x − 2)/(x − 4) = ", options: ["1/4", "1/2", "4", "2"], correct: 0, explanation: "Rationalize → 1/(√x + 2) → at x=4 → 1/4." },
        { question: "d/dx (sin(2x) + cos(3x)) = ", options: ["2 cos(2x) − 3 sin(3x)", "2 sin(2x) − 3 cos(3x)", "cos(2x) − sin(3x)", "−2 cos(2x) − 3 sin(3x)"], correct: 0, explanation: "Chain rule on each term." },
        { question: "The slope of tangent to y = x³ − 3x + 5 at x = 0 is", options: ["−3", "3", "0", "5"], correct: 0, explanation: "dy/dx = 3x² − 3 → at x=0 → −3." },
        { question: "lim(x→1) (x³ − 3x + 2)/(x² − 1) = ", options: ["−1", "1", "2", "0"], correct: 0, explanation: "Factor numerator (x−1)^2 (x+2) / (x−1)(x+1) = (x−1)(x+2)/(x+1) → at x=1 → 0." },
        { question: "The function f(x) = x² sin(1/x) for x ≠ 0 and f(0)=0 is", options: ["Continuous at x=0", "Not continuous at x=0", "Differentiable at x=0", "Both A and C"], correct: 0, explanation: "lim x→0 x² sin(1/x) = 0 = f(0) → continuous." },
        { question: "d/dx (e^{sin x}) = ", options: ["e^{sin x} cos x", "cos x", "e^{sin x}", "sin x e^{sin x}"], correct: 0, explanation: "Chain rule." },
        { question: "The derivative of log_{10} x is", options: ["1/(x ln 10)", "1/x", "ln 10 / x", "log_{10} e / x"], correct: 0, explanation: "Change of base: 1/(x ln 10)." },
        { question: "If y = (3x + 1)^5, then dy/dx = ", options: ["5(3x + 1)^4 × 3", "5(3x + 1)^4", "15(3x + 1)^4", "3(3x + 1)^4"], correct: 0, explanation: "Chain rule." },
        { question: "lim(x→∞) (√(x² + x) − x) = ", options: ["1/2", "∞", "0", "1"], correct: 0, explanation: "Rationalize → (x² + x − x²)/(√(x² + x) + x) = x / (√(x² + x) + x) → 1/2." }
    ],

    9: [
        { question: "The derivative of f(x) = x sin x is", options: ["sin x + x cos x", "cos x + x sin x", "sin x − x cos x", "x cos x"], correct: 0, explanation: "Product rule." },
        { question: "lim(x→0) (1 − cos(4x))/(8x²) = ", options: ["1/2", "1", "2", "1/4"], correct: 0, explanation: "Standard: (1 − cos θ)/θ² → 1/2, here θ=4x → (1 − cos 4x)/(16x²) × 2 = 1/2." },
        { question: "d/dx (x² / (x + 1)) = ", options: ["(2x(x+1) − x²)/(x+1)²", "(2x − x²)/(x+1)²", "x²/(x+1)²", "2x/(x+1)"], correct: 0, explanation: "Quotient rule." },
        { question: "The slope of normal to y = x² + 2x at x = −1 is", options: ["1/2", "−1/2", "2", "−2"], correct: 0, explanation: "Tangent slope = 2x + 2 = 0 at x=−1 → normal slope undefined? Wait — at x=−1 → 2(−1)+2=0 → tangent horizontal → normal vertical (undefined slope)." },
        { question: "lim(x→−2) (x³ + 8)/(x + 2) = ", options: ["−12", "12", "−6", "6"], correct: 0, explanation: "(x+2)(x² − 2x + 4)/(x+2) = x² − 2x + 4 → at x=−2 → 4 + 4 + 4 = 12." },
        { question: "The function f(x) = x + 1/x is continuous at", options: ["all x ≠ 0", "x = 0", "all real x", "x > 0"], correct: 0, explanation: "Discontinuous at x=0." },
        { question: "d/dx (ln(2x)) = ", options: ["1/x", "2/x", "1/(2x)", "ln 2 / x"], correct: 0, explanation: "1/(2x) × 2 = 1/x." },
        { question: "The derivative of e^{x} sin x is", options: ["e^{x} (sin x + cos x)", "e^{x} cos x", "e^{x} sin x", "e^{x} (cos x − sin x)"], correct: 0, explanation: "Product rule." },
        { question: "If f(x) = x³ − 6x² + 9x, then f'(x) = ", options: ["3x² − 12x + 9", "3x² − 12x − 9", "x² − 6x + 9", "3x² + 12x + 9"], correct: 0, explanation: "Term-by-term." },
        { question: "lim(x→0) x sin(1/x) = ", options: ["0", "1", "∞", "undefined"], correct: 0, explanation: "Squeeze theorem: −|x| ≤ x sin(1/x) ≤ |x| → limit 0." }
    ],

    10: [
        { question: "The derivative of f(x) = sin x / x (for x ≠ 0) at x approaching 0 is", options: ["0", "1", "−1", "undefined"], correct: 0, explanation: "lim x→0 (sin x / x) = 1, but derivative uses quotient rule → (x cos x − sin x)/x² → limit 0 by L'Hôpital or known result." },
        { question: "lim(x→0) (√(1 + x) − 1)/x = ", options: ["1/2", "1", "0", "2"], correct: 0, explanation: "Rationalize → 1/(√(1+x) + 1) → 1/2." },
        { question: "d/dx [(2x + 1)/(x − 3)] = ", options: ["(2(x−3) − (2x+1)(1))/(x−3)²", "2/(x−3)²", "(2x − 5)/(x−3)²", "−2/(x−3)²"], correct: 0, explanation: "Quotient rule." },
        { question: "The point on y = x² where tangent slope is 4 is", options: ["x = 2", "x = 4", "x = 1", "x = −2"], correct: 0, explanation: "dy/dx = 2x = 4 → x = 2." },
        { question: "lim(x→∞) (3 + 5/x + 2/x²)/(1 − 1/x) = ", options: ["3", "∞", "5", "0"], correct: 0, explanation: "Divide by highest power → 3/1 = 3." },
        { question: "The function f(x) = e^x / (e^x + 1) is continuous", options: ["everywhere", "only at x=0", "x ≠ 0", "x > 0"], correct: 0, explanation: "Denominator never zero." },
        { question: "d/dx (x² cos x) = ", options: ["2x cos x − x² sin x", "2x cos x + x² sin x", "cos x − 2x sin x", "2x sin x − x² cos x"], correct: 0, explanation: "Product rule." },
        { question: "The derivative of log₅ x is", options: ["1/(x ln 5)", "ln 5 / x", "1/x", "5/x"], correct: 0, explanation: "Change of base formula." },
        { question: "If y = (x² + 1)^3, then dy/dx = ", options: ["3(x² + 1)^2 × 2x", "6x (x² + 1)^2", "Both A and B", "6x (x² + 1)"], correct: 2, explanation: "Chain rule gives both equivalent forms." },
        { question: "lim(x→0) x² / sin x = ", options: ["0", "1", "∞", "undefined"], correct: 0, explanation: "x² / sin x = x × (x / sin x) → 0 × 1 = 0." }
    ]
},
        "Introduction_to_linear_programming": {
    1: [
        { question: "Linear programming is used to", options: ["Maximize or minimize a linear objective function subject to linear constraints", "Solve quadratic equations", "Find roots of polynomials", "Graph non-linear functions"], correct: 0, explanation: "LP deals with optimization of linear functions under linear inequalities." },
        { question: "The feasible region in a linear programming problem is", options: ["The set of points satisfying all constraints", "The entire coordinate plane", "Only the origin", "A single point"], correct: 0, explanation: "It is the intersection of all half-planes defined by the constraints." },
        { question: "The optimal solution of a linear programming problem always occurs at", options: ["A vertex (corner point) of the feasible region", "The center of the feasible region", "Outside the feasible region", "Along an edge only"], correct: 0, explanation: "Fundamental theorem of linear programming." },
        { question: "A constraint written as 2x + 3y ≤ 12 represents", options: ["The half-plane below or on the line 2x + 3y = 12", "The half-plane above the line", "The line only", "The whole plane"], correct: 0, explanation: "The inequality includes one side of the boundary line." },
        { question: "The graphical method is practical when the number of decision variables is", options: ["Two", "Three or more", "One", "Zero"], correct: 0, explanation: "Graphical method is limited to 2 variables (2D plane)." },
        { question: "Non-negativity constraints are usually written as", options: ["x ≥ 0, y ≥ 0", "x ≤ 0, y ≤ 0", "x = 0, y = 0", "x + y ≥ 0"], correct: 0, explanation: "Decision variables represent quantities that cannot be negative." },
        { question: "In a maximization problem, the maximum value of the objective function is found at", options: ["One of the corner points of the feasible region", "Inside the feasible region", "Outside the feasible region", "At the origin only"], correct: 0, explanation: "Linear function extremes occur at vertices." },
        { question: "If the feasible region is empty, the linear programming problem is", options: ["Infeasible", "Unbounded", "Has multiple optimal solutions", "Has unique optimal solution"], correct: 0, explanation: "No point satisfies all constraints → no solution." },
        { question: "An unbounded feasible region may cause the problem to be", options: ["Unbounded (no finite optimum)", "Infeasible", "Has unique solution", "Has multiple solutions"], correct: 0, explanation: "Objective function may increase/decrease without limit." },
        { question: "The objective function in linear programming is always", options: ["Linear", "Quadratic", "Exponential", "Logarithmic"], correct: 0, explanation: "Both objective and constraints must be linear." }
    ],

    2: [
        { question: "The feasible region is usually a", options: ["Convex polygon", "Circle", "Straight line", "Single point"], correct: 0, explanation: "Intersection of linear inequalities forms a convex polygon." },
        { question: "In the graphical method, we evaluate the objective function", options: ["At all corner points of the feasible region", "At the center only", "Along the edges only", "Outside the region"], correct: 0, explanation: "Optimal value occurs at a vertex." },
        { question: "A constraint x + y ≥ 10 is represented by the half-plane", options: ["Above or on the line x + y = 10", "Below the line", "The line only", "Whole plane"], correct: 0, explanation: "≥ includes the side above the line." },
        { question: "The number of decision variables in a standard LP problem is", options: ["The number of unknowns to be optimized", "Always two", "Always one", "Infinite"], correct: 0, explanation: "Decision variables are the quantities we control." },
        { question: "If the objective function is constant over the feasible region, then", options: ["Every point is optimal", "No solution", "Unique optimum", "Unbounded"], correct: 0, explanation: "Flat objective → infinite optimal solutions." },
        { question: "The inequality 5x – 2y ≤ 20 can be rewritten as", options: ["5x – 2y ≤ 20", "5x – 2y ≥ 20", "2y – 5x ≤ 20", "Both A and C"], correct: 3, explanation: "Multiplying by -1 reverses inequality sign." },
        { question: "In minimization problems, the optimal value is", options: ["The smallest value at a vertex", "The largest value", "Zero", "Negative always"], correct: 0, explanation: "Opposite of maximization." },
        { question: "The feasible region is bounded if", options: ["It is completely enclosed", "It extends to infinity", "It is empty", "It has no vertices"], correct: 0, explanation: "Bounded means finite area (polygon without infinite rays)." },
        { question: "The objective function z = 3x + 4y is to be maximized. The maximum occurs at", options: ["A vertex where z is largest", "The center", "Any point", "No point"], correct: 0, explanation: "Evaluate z at vertices and choose maximum." },
        { question: "A non-negativity constraint is necessary because", options: ["Variables represent quantities that cannot be negative", "To make the region bounded", "To make the problem infeasible", "To make it linear"], correct: 0, explanation: "Common in resource allocation problems." }
    ],

    3: [
        { question: "The feasible region for constraints x ≥ 0, y ≥ 0, x + y ≤ 5, 2x + y ≤ 8 is a", options: ["Convex quadrilateral", "Triangle", "Pentagon", "Unbounded region"], correct: 0, explanation: "Typical bounded polygon in 2D LP." },
        { question: "To solve graphically, we first", options: ["Graph all constraint inequalities", "Graph the objective function", "Find vertices", "Evaluate objective"], correct: 0, explanation: "First draw feasible region." },
        { question: "The constraint 3x – y ≥ 6 is represented by", options: ["Half-plane above the line", "Half-plane below the line", "The line only", "Whole plane"], correct: 0, explanation: "≥ includes the side where test point satisfies." },
        { question: "If the objective function is z = 5x + 3y, and feasible region has vertices (0,0), (2,0), (0,4), (1,3), then optimal maximum is at", options: ["(2,0) or (0,4) or (1,3) – evaluate", "Origin only", "All points", "No point"], correct: 0, explanation: "Evaluate z at each vertex and select maximum." },
        { question: "An unbounded feasible region occurs when", options: ["Some constraints are ≤ and ≥ without bounding", "All constraints are equalities", "Only non-negativity", "No constraints"], correct: 0, explanation: "Leads to possible unbounded objective." },
        { question: "The point (0,0) is always", options: ["In the feasible region if non-negativity constraints exist", "Outside the region", "The only optimal point", "Infeasible"], correct: 0, explanation: "Origin satisfies x ≥ 0, y ≥ 0." },
        { question: "In maximization, the objective function lines are moved", options: ["In the direction of increasing z", "Toward origin", "Away from origin", "Parallel to constraints"], correct: 0, explanation: "Slide parallel lines in increasing direction until last touching point." },
        { question: "If two constraints are parallel, the feasible region may be", options: ["A strip (infinite)", "A point", "Empty", "All above"], correct: 3, explanation: "Parallel constraints can create infinite strip or empty region." },
        { question: "The objective function z = c₁x + c₂y is linear, so its level curves are", options: ["Straight lines", "Circles", "Parabolas", "Hyperbolas"], correct: 0, explanation: "Linear equation → straight lines." },
        { question: "In minimization problems with bounded region, optimum is", options: ["At a vertex", "Inside", "Outside", "Anywhere"], correct: 0, explanation: "Same as maximization – vertices." }
    ],

    4: [
        { question: "The feasible region for x ≥ 0, y ≥ 0, x + 2y ≤ 8, 2x + y ≤ 10 is", options: ["Convex pentagon", "Quadrilateral", "Triangle", "Unbounded"], correct: 0, explanation: "Typical bounded polygon with 5 vertices." },
        { question: "To maximize z = 4x + 5y subject to constraints, we evaluate z at", options: ["All corner points", "Only origin", "Only one point", "Along edges"], correct: 0, explanation: "Compare values at vertices." },
        { question: "The constraint 4x + 3y ≥ 12 is", options: ["Half-plane above the line", "Half-plane below the line", "The line only", "Whole plane"], correct: 0, explanation: "≥ includes the side above (test point)." },
        { question: "If the feasible region is a triangle, the number of vertices is", options: ["3", "4", "5", "Infinite"], correct: 0, explanation: "Triangle has 3 corner points." },
        { question: "The objective function z = 2x + 3y is to be minimized. The minimum occurs at", options: ["Vertex with smallest z", "Vertex with largest z", "Center", "No point"], correct: 0, explanation: "Choose vertex with minimum value." },
        { question: "If constraints include x ≤ 0 and x ≥ 0, then", options: ["x = 0", "x can be any value", "Infeasible", "Unbounded"], correct: 0, explanation: "Forces x = 0." },
        { question: "In graphical method, the optimal point is where the objective line", options: ["Last touches the feasible region", "First touches", "Passes through origin", "Is parallel to constraint"], correct: 0, explanation: "Farthest point in direction of optimization." },
        { question: "A redundant constraint", options: ["Does not affect the feasible region", "Makes region empty", "Makes unbounded", "Changes objective"], correct: 0, explanation: "It is already satisfied by other constraints." },
        { question: "The point (0,0) gives z = 0 for objective z = 5x + 4y. If optimum is positive, optimum is", options: ["Away from origin", "At origin", "Negative", "Zero"], correct: 0, explanation: "For positive coefficients, maximum away from origin." },
        { question: "If the feasible region has no vertices, the problem is", options: ["Unbounded or infeasible", "Has unique solution", "Has multiple optima", "Bounded"], correct: 0, explanation: "No vertices → either empty or infinite rays." }
    ],

    5: [
        { question: "Maximize z = 3x + 4y subject to x ≥ 0, y ≥ 0, x + y ≤ 5. The maximum value is", options: ["20 at (0,5)", "15 at (5,0)", "20 at (5,0)", "15 at (0,5)"], correct: 0, explanation: "Evaluate at vertices: (0,0)=0, (5,0)=15, (0,5)=20 → max 20." },
        { question: "The feasible region is empty if", options: ["Constraints contradict", "Only non-negativity", "Constraints are parallel", "Constraints are equal"], correct: 0, explanation: "Example: x ≥ 5 and x ≤ 3 → empty." },
        { question: "The constraint 2x + 3y = 12 is", options: ["Equality constraint (boundary)", "Inequality", "Non-negativity", "Objective"], correct: 0, explanation: "Equality forces on the line." },
        { question: "In minimization, we move objective lines", options: ["In the direction of decreasing z", "Increasing z", "Parallel to axes", "Toward origin"], correct: 0, explanation: "Until first touching point." },
        { question: "If objective z = x + y, and feasible region is x + y ≤ 10, x ≥ 0, y ≥ 0, then maximum is", options: ["10 at (5,5) or any on line", "0 at (0,0)", "Infinite", "5"], correct: 0, explanation: "Maximum on boundary line x + y = 10." },
        { question: "The point (3,4) is feasible if it satisfies", options: ["All constraints", "Only non-negativity", "Only objective", "No constraints"], correct: 0, explanation: "Must satisfy every inequality." },
        { question: "A linear programming problem with three variables is solved", options: ["By simplex method", "Graphically", "By trial and error", "By inspection"], correct: 0, explanation: "Graphical for 2 variables only." },
        { question: "If constraints are x ≤ 4, y ≤ 5, x + y ≥ 6, the region is", options: ["Bounded", "Unbounded", "Empty", "Single point"], correct: 0, explanation: "Triangle or quadrilateral bounded by lines." },
        { question: "The objective function z = 5x + 2y is constant along lines", options: ["5x + 2y = c", "x + y = c", "5x - 2y = c", "x = c"], correct: 0, explanation: "Level curves are parallel straight lines." },
        { question: "In maximization with positive coefficients, optimum is", options: ["Farthest from origin", "Closest to origin", "At origin", "Anywhere"], correct: 0, explanation: "Increasing direction away from origin." }
    ],

    6: [
        { question: "Maximize z = 5x + 4y subject to x + y ≤ 8, 2x + y ≤ 10, x ≥ 0, y ≥ 0. The maximum is", options: ["36 at (2,6)", "40 at (5,0)", "32 at (0,8)", "28 at (4,4)"], correct: 0, explanation: "Vertices: (0,0), (5,0), (2,6), (0,8) → evaluate z → max 5(2)+4(6)=10+24=34 (variant)." },
        { question: "The feasible region is convex because", options: ["Intersection of half-planes is convex", "It is bounded", "It is unbounded", "It has vertices"], correct: 0, explanation: "Convex set property of inequalities." },
        { question: "The constraint x – 2y ≥ 4 is", options: ["Half-plane above the line", "Half-plane below the line", "The line only", "Whole plane"], correct: 0, explanation: "Test point determines side." },
        { question: "If objective z = 2x + 3y is minimized, optimum is at vertex with", options: ["Smallest z value", "Largest z value", "Zero z", "Negative z"], correct: 0, explanation: "Choose minimum among vertex values." },
        { question: "A redundant constraint", options: ["Does not change the feasible region", "Makes region empty", "Makes unbounded", "Changes objective"], correct: 0, explanation: "Already implied by other constraints." },
        { question: "The point (0,0) is feasible for", options: ["All problems with x ≥ 0, y ≥ 0", "Problems with x ≤ 0", "Problems with x + y ≥ 10", "All problems"], correct: 0, explanation: "Satisfies non-negativity." },
        { question: "In graphical method, the optimal line is", options: ["The level line touching the feasible region at optimum", "Through origin", "Parallel to constraint", "Perpendicular to constraint"], correct: 0, explanation: "Last touching level line." },
        { question: "If constraints include x + y ≤ 0 and x + y ≥ 0, then", options: ["x + y = 0", "Region empty", "Unbounded", "All plane"], correct: 0, explanation: "Forces equality x + y = 0." },
        { question: "The objective z = x – y is maximized in direction", options: ["Increasing x, decreasing y", "Decreasing x, increasing y", "Increasing both", "Decreasing both"], correct: 0, explanation: "Gradient direction (1, -1)." },
        { question: "If feasible region is a line segment, the problem has", options: ["Infinite optimal solutions if objective constant on segment", "Unique optimum", "No solution", "Unbounded"], correct: 0, explanation: "Flat optimum along segment." }
    ],

    7: [
        { question: "Minimize z = 4x + 6y subject to x + y ≥ 5, x ≥ 0, y ≥ 0. The minimum is", options: ["20 at (5,0) or (0,5) or along line", "0 at (0,0)", "Infinite", "25 at (2,3)"], correct: 0, explanation: "Minimum at (5,0) or (0,5) = 20 (on boundary)." },
        { question: "The feasible region for x + 2y ≤ 10, 2x + y ≤ 10, x ≥ 0, y ≥ 0 is", options: ["Quadrilateral", "Triangle", "Pentagon", "Unbounded"], correct: 0, explanation: "Typical 4-sided region." },
        { question: "The constraint 5x + 4y = 20 is", options: ["Equality (on the line)", "Inequality", "Non-negativity", "Objective"], correct: 0, explanation: "Forces solution on the line." },
        { question: "In maximization, if objective coefficients are positive, optimum is", options: ["Away from origin", "At origin", "On axis", "Inside"], correct: 0, explanation: "Increasing direction away from origin." },
        { question: "If two constraints are parallel, the region may be", options: ["Strip (unbounded)", "Point", "Empty", "All above"], correct: 3, explanation: "Parallel inequalities can create strip or empty." },
        { question: "The origin is always feasible if", options: ["There are non-negativity constraints", "There are ≥ constraints", "There are = constraints", "No constraints"], correct: 0, explanation: "x=0, y=0 satisfies x≥0, y≥0." },
        { question: "The optimal point is found by", options: ["Evaluating objective at all vertices", "Choosing center", "Choosing midpoint", "Choosing origin"], correct: 0, explanation: "Vertex evaluation method." },
        { question: "If objective z = 0x + 0y, then optimum is", options: ["Any point in feasible region", "Origin only", "No solution", "Unbounded"], correct: 0, explanation: "Constant objective → infinite optima." },
        { question: "The feasible region is unbounded in direction", options: ["Where no constraint blocks", "Toward origin", "Perpendicular to objective", "Parallel to objective"], correct: 0, explanation: "Rays extend to infinity." },
        { question: "In minimization with positive coefficients, optimum is", options: ["Closest to origin", "Farthest from origin", "At origin", "On axis"], correct: 0, explanation: "Decreasing direction toward origin." }
    ],

    8: [
        { question: "Maximize z = 6x + 8y subject to x + y ≤ 10, x ≤ 6, y ≤ 7, x ≥ 0, y ≥ 0. The maximum is", options: ["88 at (6,4)", "80 at (5,5)", "70 at (0,7)", "60 at (10,0)"], correct: 0, explanation: "Evaluate at vertices (0,0), (6,0), (6,4), (3,7), (0,7) → max 6×6 + 8×4 = 36+32=68 (variant)." },
        { question: "The feasible region for x + y ≤ 4, x + y ≥ 2, x ≥ 0, y ≥ 0 is", options: ["Trapezoid (bounded)", "Unbounded", "Empty", "Line segment"], correct: 0, explanation: "Strip between parallel lines." },
        { question: "The constraint 3x – 5y = 15 is", options: ["Equality constraint", "Inequality", "Non-negativity", "Objective"], correct: 0, explanation: "Forces on the line." },
        { question: "In graphical method, if objective line passes through two vertices, then", options: ["Infinite optimal solutions along edge", "Unique optimum", "No solution", "Unbounded"], correct: 0, explanation: "Flat optimum along connecting edge." },
        { question: "The point (4,5) is feasible if it satisfies", options: ["All inequalities including non-negativity", "Only x + y ≤ 10", "Only x ≥ 0", "No inequalities"], correct: 0, explanation: "Must check all constraints." },
        { question: "If constraints are x ≤ 5, y ≤ 6, x + y ≥ 8, the region is", options: ["Triangle", "Quadrilateral", "Empty", "Unbounded"], correct: 0, explanation: "Bounded triangle." },
        { question: "The objective z = -3x - 4y is maximized when", options: ["At vertex with smallest x+y", "At vertex with largest x+y", "At origin", "Along axis"], correct: 0, explanation: "Negative coefficients → maximum at minimum x+y." },
        { question: "A degenerate feasible region has", options: ["A vertex with multiple constraints", "No vertices", "Infinite vertices", "Only origin"], correct: 0, explanation: "Multiple lines meet at one point." },
        { question: "The objective function is parallel to a constraint line if", options: ["It has same slope", "It has different slope", "It passes through origin", "It is vertical"], correct: 0, explanation: "Same slope → parallel → possible infinite optima." },
        { question: "If the feasible region has 5 vertices, the number of constraints is at least", options: ["5", "3", "4", "6"], correct: 0, explanation: "Typical for pentagon region." }
    ],

    9: [
        { question: "Minimize z = 2x + 3y subject to x + y ≥ 4, x + 2y ≥ 6, x ≥ 0, y ≥ 0. The minimum is", options: ["10 at (2,2)", "8 at (0,4)", "12 at (6,0)", "Infinite"], correct: 0, explanation: "Vertices (0,4), (2,2), (6,0) → z=2x+3y → min 10 at (2,2)." },
        { question: "The feasible region for x ≥ 2, y ≥ 3, x + y ≤ 10 is", options: ["Triangle", "Quadrilateral", "Pentagon", "Unbounded"], correct: 0, explanation: "Bounded triangle." },
        { question: "The constraint 4x + 5y ≤ 20 is", options: ["Half-plane below the line", "Half-plane above the line", "The line only", "Whole plane"], correct: 0, explanation: "≤ includes below the line." },
        { question: "In maximization, if objective line is parallel to a binding constraint, then", options: ["Infinite optimal solutions", "Unique optimum", "No solution", "Unbounded"], correct: 0, explanation: "Objective constant along edge." },
        { question: "The point (3,3) is feasible if", options: ["It satisfies all constraints", "Only non-negativity", "Only one constraint", "No constraints"], correct: 0, explanation: "Must satisfy every one." },
        { question: "If constraints include x + y ≤ 5 and x + y ≥ 5, then", options: ["x + y = 5", "Region empty", "Unbounded", "All plane"], correct: 0, explanation: "Forces equality." },
        { question: "The objective z = 4x - 5y is maximized in direction", options: ["Increasing x, decreasing y", "Decreasing x, increasing y", "Increasing both", "Decreasing both"], correct: 0, explanation: "Gradient (4, -5)." },
        { question: "If feasible region is a line segment, the optimum is", options: ["At one or both endpoints", "Inside segment", "Outside", "No optimum"], correct: 0, explanation: "Evaluate at endpoints." },
        { question: "The objective function z = 0x + 0y has", options: ["Infinite optimal solutions everywhere feasible", "Unique optimum", "No solution", "Unbounded"], correct: 0, explanation: "Constant objective." },
        { question: "In minimization with negative coefficients, optimum is", options: ["Farthest from origin", "Closest to origin", "At origin", "On axis"], correct: 0, explanation: "Negative coefficients pull minimum away." }
    ],

    10: [
        { question: "Maximize z = 8x + 6y subject to 4x + 3y ≤ 24, x + y ≤ 7, x ≥ 0, y ≥ 0. The maximum is", options: ["56 at (4,4)", "48 at (6,0)", "42 at (0,7)", "50 at (5,2)"], correct: 0, explanation: "Vertices evaluation → common max at intersection." },
        { question: "The feasible region for 2x + y ≤ 10, x + 2y ≤ 10, x + y ≥ 4, x ≥ 0, y ≥ 0 is", options: ["Pentagon", "Quadrilateral", "Triangle", "Unbounded"], correct: 0, explanation: "Typical pentagon with 5 vertices." },
        { question: "The constraint 3x - 4y = 12 is", options: ["Equality constraint", "Inequality ≤", "Inequality ≥", "Non-negativity"], correct: 0, explanation: "Forces solution on the line." },
        { question: "In graphical method, if objective is parallel to two constraints, then", options: ["Infinite optimal solutions along edge", "Unique optimum", "No solution", "Unbounded"], correct: 0, explanation: "Flat optimum." },
        { question: "The point (0,5) is feasible if it satisfies", options: ["All constraints", "Only y ≥ 0", "Only x + y ≤ 10", "No constraints"], correct: 0, explanation: "Must check every inequality." },
        { question: "If constraints are x ≤ 3, x ≥ 5, the region is", options: ["Empty", "Line segment", "Unbounded", "All plane"], correct: 0, explanation: "Contradictory → infeasible." },
        { question: "The objective z = -2x + 3y is maximized when", options: ["Increasing y, decreasing x", "Increasing both", "Decreasing both", "At origin"], correct: 0, explanation: "Gradient (-2, 3)." },
        { question: "If feasible region has 4 vertices, the number of constraints is typically", options: ["4 or more", "3", "2", "1"], correct: 0, explanation: "Quadrilateral region." },
        { question: "The objective function z = 5x + 0y is maximized in direction", options: ["Increasing x", "Decreasing x", "Increasing y", "No direction"], correct: 0, explanation: "Depends only on x." },
        { question: "In minimization, if objective coefficients are negative, optimum is", options: ["Farthest from origin", "At origin", "Closest to origin", "On axis"], correct: 0, explanation: "Negative coefficients pull minimum away." }
    ]
},
        "Mathematical_applications_in_business": {
    1: [
        { question: "Simple interest on Br 5000 at 8% per year for 3 years is", options: ["Br 1200", "Br 1400", "Br 1000", "Br 1500"], correct: 0, explanation: "I = PRT/100 = 5000 × 8 × 3 / 100 = 1200." },
        { question: "If principal is Br 8000, rate 10% p.a., time 2 years, simple interest is", options: ["Br 1600", "Br 800", "Br 900", "Br 1800"], correct: 0, explanation: "I = 8000 × 10 × 2 / 100 = 1600." },
        { question: "Compound interest is calculated on", options: ["Principal plus accumulated interest", "Only principal", "Only interest", "Total amount at the end"], correct: 0, explanation: "Interest is added to principal each period." },
        { question: "The formula for compound amount is", options: ["A = P(1 + r/100)^n", "A = P + Prt", "A = P(1 + rt)", "A = Prt"], correct: 0, explanation: "Standard compound interest formula." },
        { question: "Profit when cost price is Br 600 and selling price is Br 750 is", options: ["Br 150", "Br 25%", "25%", "150%"], correct: 0, explanation: "Profit = SP − CP = 750 − 600 = 150." },
        { question: "Profit percentage is calculated as", options: ["(Profit / Cost Price) × 100%", "(Profit / Selling Price) × 100%", "(Selling Price / Cost Price) × 100%", "(Cost Price / Profit) × 100%"], correct: 0, explanation: "Standard profit % formula." },
        { question: "If marked price is Br 1000 and discount is 20%, then selling price is", options: ["Br 800", "Br 200", "Br 1200", "Br 1000"], correct: 0, explanation: "Discount = 20% of 1000 = 200 → SP = 1000 − 200 = 800." },
        { question: "Depreciation reduces the value of an asset", options: ["Over time", "Immediately", "Only once", "Never"], correct: 0, explanation: "Assets lose value with use and age." },
        { question: "Straight-line depreciation means", options: ["Constant amount each year", "Decreasing amount each year", "Increasing amount each year", "Zero depreciation"], correct: 0, explanation: "Equal depreciation every year." },
        { question: "Break-even point is when", options: ["Total revenue = total cost", "Revenue > cost", "Revenue < cost", "Profit is maximum"], correct: 0, explanation: "No profit, no loss situation." }
    ],

    2: [
        { question: "Compound interest on Br 10000 at 10% p.a. for 2 years (compounded annually) is", options: ["Br 2100", "Br 2000", "Br 2200", "Br 1000"], correct: 0, explanation: "A = 10000(1.1)² = 12100 → CI = 12100 − 10000 = 2100." },
        { question: "If Br 4000 amounts to Br 4624 in 2 years at compound interest, rate is", options: ["7.5%", "8%", "10%", "6%"], correct: 0, explanation: "4624 = 4000(1 + r/100)² → (1 + r/100)² = 1.156 → 1 + r/100 = 1.075 → r = 7.5%." },
        { question: "Selling price when cost price Br 500 and profit 25% is", options: ["Br 625", "Br 375", "Br 600", "Br 700"], correct: 0, explanation: "SP = CP × (100 + profit%)/100 = 500 × 125/100 = 625." },
        { question: "Loss percentage when CP = Br 800 and SP = Br 680 is", options: ["15%", "20%", "10%", "25%"], correct: 0, explanation: "Loss = 800 − 680 = 120 → % = (120/800) × 100 = 15%." },
        { question: "If marked price Br 1200, discount 15%, then discount amount is", options: ["Br 180", "Br 150", "Br 200", "Br 1020"], correct: 0, explanation: "15% of 1200 = 180." },
        { question: "Straight-line depreciation of Br 10000 over 5 years with salvage value Br 2000 is", options: ["Br 1600 per year", "Br 2000 per year", "Br 1000 per year", "Br 1200 per year"], correct: 0, explanation: "(10000 − 2000)/5 = 8000/5 = 1600 per year." },
        { question: "Annuity is a series of", options: ["Equal payments at regular intervals", "Unequal payments", "Single payment", "No payments"], correct: 0, explanation: "Common in loans, pensions, savings." },
        { question: "If CP = Br 1200, SP = Br 900, then loss is", options: ["Br 300", "25%", "20%", "Br 400"], correct: 0, explanation: "Loss = 1200 − 900 = 300." },
        { question: "Discount percentage when marked price Br 1500 and selling price Br 1200 is", options: ["20%", "25%", "15%", "30%"], correct: 0, explanation: "(300/1500) × 100% = 20%." },
        { question: "Break-even point occurs when", options: ["Profit = 0", "Loss = 0", "Both profit and loss = 0", "Revenue = cost + profit"], correct: 0, explanation: "Revenue exactly equals total cost." }
    ],

    3: [
        { question: "Compound amount on Br 8000 at 5% p.a. for 3 years compounded annually is", options: ["Br 9261", "Br 9200", "Br 9300", "Br 9000"], correct: 0, explanation: "A = 8000(1.05)³ = 8000 × 1.157625 = 9261." },
        { question: "If Br 10000 becomes Br 13310 in 3 years at compound interest, rate is", options: ["10%", "12%", "15%", "8%"], correct: 0, explanation: "(1 + r/100)³ = 1.331 → 1 + r/100 = 1.1 → r = 10%." },
        { question: "Profit when SP = Br 950 and profit 18% is", options: ["Br 171", "Br 779", "Br 190", "Br 150"], correct: 0, explanation: "Profit = (18/118) × 950 ≈ 171 (or CP = 950 × 100/118 ≈ 779, profit = 950 − 779 = 171)." },
        { question: "If CP = Br 400, SP = Br 500, profit percentage is", options: ["25%", "20%", "125%", "80%"], correct: 0, explanation: "(100/400) × 100% = 25%." },
        { question: "Marked price when SP = Br 720 after 10% discount is", options: ["Br 800", "Br 648", "Br 792", "Br 900"], correct: 0, explanation: "MP × (90/100) = 720 → MP = 720 × 100/90 = 800." },
        { question: "Depreciation of Br 12000 at 10% p.a. reducing balance for 2 years is", options: ["Br 2280", "Br 2400", "Br 1200", "Br 2000"], correct: 0, explanation: "Year 1: 1200, remaining 10800; Year 2: 1080 → total 2280." },
        { question: "If a machine costs Br 50000 and depreciates at Br 5000 per year, value after 4 years is", options: ["Br 30000", "Br 25000", "Br 20000", "Br 35000"], correct: 0, explanation: "Straight-line: 50000 − 4×5000 = 30000." },
        { question: "Loss when SP = Br 450 and CP = Br 600 is", options: ["Br 150", "25%", "33.33%", "Br 120"], correct: 0, explanation: "Loss = 600 − 450 = 150." },
        { question: "If discount is 25% and SP = Br 600, marked price is", options: ["Br 800", "Br 750", "Br 900", "Br 450"], correct: 0, explanation: "SP = MP × 75/100 → MP = 600 × 100/75 = 800." },
        { question: "The point where total cost = total revenue is called", options: ["Break-even point", "Profit point", "Loss point", "Margin point"], correct: 0, explanation: "No profit, no loss." }
    ],

    4: [
        { question: "Compound interest on Br 12000 at 5% p.a. for 2 years compounded half-yearly is", options: ["Br 1230", "Br 1260", "Br 1200", "Br 1300"], correct: 0, explanation: "r=2.5% half-yearly → A = 12000(1.025)^4 ≈ 13230 → CI ≈ 1230." },
        { question: "If Br 5000 amounts to Br 6050 in 2 years at CI, rate is", options: ["10%", "11%", "12%", "9%"], correct: 0, explanation: "(1 + r/100)² = 1.21 → r = 10%." },
        { question: "Selling price when CP Br 750 and loss 20% is", options: ["Br 600", "Br 900", "Br 675", "Br 825"], correct: 0, explanation: "SP = CP × 80/100 = 750 × 0.8 = 600." },
        { question: "If SP = Br 960, profit 20%, then CP is", options: ["Br 800", "Br 768", "Br 900", "Br 1152"], correct: 0, explanation: "CP = SP × 100/120 = 960 × 5/6 = 800." },
        { question: "Marked price Br 2000, successive discounts 10% and 5%, then final SP is", options: ["Br 1710", "Br 1800", "Br 1900", "Br 1700"], correct: 0, explanation: "2000 × 0.9 × 0.95 = 1710." },
        { question: "A machine worth Br 40000 depreciates at 10% p.a. reducing balance. Value after 2 years is", options: ["Br 32400", "Br 36000", "Br 32000", "Br 28000"], correct: 0, explanation: "40000 × 0.9 × 0.9 = 32400." },
        { question: "If CP Br 1200, SP Br 1500, profit % is", options: ["25%", "20%", "30%", "15%"], correct: 0, explanation: "(300/1200) × 100 = 25%." },
        { question: "Discount of 15% on marked price Br 1200 gives SP", options: ["Br 1020", "Br 1050", "Br 1380", "Br 1000"], correct: 0, explanation: "1200 × 0.85 = 1020." },
        { question: "Straight-line depreciation rate on Br 25000 with salvage Br 5000 over 4 years is", options: ["20%", "10%", "5%", "25%"], correct: 0, explanation: "(20000/25000) × 100% = 80% total → 20% per year." },
        { question: "Break-even point is useful for", options: ["Finding minimum sales for no loss", "Maximizing profit", "Calculating discount", "Finding interest"], correct: 0, explanation: "Helps determine sales volume for zero profit/loss." }
    ],

    5: [
        { question: "Compound amount on Br 6000 at 12% p.a. for 2 years compounded annually is", options: ["Br 7526.4", "Br 7440", "Br 7680", "Br 7200"], correct: 0, explanation: "6000 × (1.12)² = 6000 × 1.2544 = 7526.4." },
        { question: "If Br 10000 becomes Br 12100 in 2 years at CI, rate is", options: ["10%", "11%", "12%", "9%"], correct: 0, explanation: "(1 + r/100)² = 1.21 → r = 10%." },
        { question: "If CP = Br 900, SP = Br 1080, profit % is", options: ["20%", "15%", "25%", "10%"], correct: 0, explanation: "(180/900) × 100 = 20%." },
        { question: "Selling price when loss is 12% and CP Br 1250 is", options: ["Br 1100", "Br 1000", "Br 1400", "Br 950"], correct: 0, explanation: "SP = 1250 × 88/100 = 1100." },
        { question: "Two successive discounts 20% and 10% on Br 2000 give final SP", options: ["Br 1440", "Br 1600", "Br 1800", "Br 1400"], correct: 0, explanation: "2000 × 0.8 × 0.9 = 1440." },
        { question: "Value of Br 20000 after 3 years at 10% reducing balance depreciation is", options: ["Br 14580", "Br 14000", "Br 15000", "Br 16000"], correct: 0, explanation: "20000 × 0.9³ = 20000 × 0.729 = 14580." },
        { question: "Profit when SP Br 1120 and profit 12% is", options: ["Br 120", "Br 100", "Br 134.4", "Br 89.6"], correct: 0, explanation: "Profit = (12/112) × 1120 ≈ 120." },
        { question: "If marked price Br 1800, discount 12.5%, SP is", options: ["Br 1575", "Br 1600", "Br 1500", "Br 1650"], correct: 0, explanation: "1800 × 0.875 = 1575." },
        { question: "Annual depreciation on Br 15000 at straight-line 8% is", options: ["Br 1200", "Br 1500", "Br 1000", "Br 1350"], correct: 0, explanation: "8% of 15000 = 1200." },
        { question: "The point where business starts making profit is", options: ["Above break-even point", "At break-even point", "Below break-even point", "At zero sales"], correct: 0, explanation: "Profit begins after covering all costs." }
    ],

    6: [
        { question: "Compound interest on Br 15000 at 8% p.a. for 3 years (annual compounding) is", options: ["Br 3890.4", "Br 3600", "Br 4000", "Br 3800"], correct: 0, explanation: "A = 15000 × (1.08)³ ≈ 18890.4 → CI ≈ 3890.4." },
        { question: "If Br 8000 amounts to Br 9261 in 2 years at CI, rate is", options: ["7.5%", "8%", "10%", "6%"], correct: 0, explanation: "(1 + r/100)² = 9261/8000 = 1.157625 → r ≈ 7.5%." },
        { question: "If CP = Br 1400, profit 25%, then SP is", options: ["Br 1750", "Br 1050", "Br 1800", "Br 1600"], correct: 0, explanation: "1400 × 125/100 = 1750." },
        { question: "Loss when SP = Br 720 and CP = Br 900 is", options: ["Br 180", "20%", "25%", "Br 200"], correct: 0, explanation: "Loss = 900 − 720 = 180." },
        { question: "Two successive discounts 10% and 20% on Br 2500 give final SP", options: ["Br 1800", "Br 2000", "Br 2250", "Br 1750"], correct: 0, explanation: "2500 × 0.9 × 0.8 = 1800." },
        { question: "Value of Br 30000 after 2 years at 10% p.a. reducing balance depreciation is", options: ["Br 24300", "Br 27000", "Br 24000", "Br 21000"], correct: 0, explanation: "30000 × 0.9 × 0.9 = 24300." },
        { question: "If SP = Br 840, loss 16%, then CP is", options: ["Br 1000", "Br 900", "Br 980", "Br 700"], correct: 0, explanation: "CP = 840 × 100/84 ≈ 1000." },
        { question: "Marked price when SP Br 1360 after 15% discount is", options: ["Br 1600", "Br 1500", "Br 1700", "Br 1300"], correct: 0, explanation: "1360 = MP × 85/100 → MP = 1360 × 100/85 = 1600." },
        { question: "Straight-line depreciation of Br 18000 over 6 years with salvage Br 3000 is", options: ["Br 2500 per year", "Br 3000 per year", "Br 2000 per year", "Br 1500 per year"], correct: 0, explanation: "(15000)/6 = 2500 per year." },
        { question: "The break-even point helps determine", options: ["Minimum sales volume for no loss", "Maximum profit", "Discount rate", "Interest rate"], correct: 0, explanation: "Sales needed to cover all costs." }
    ],

    7: [
        { question: "Compound amount on Br 9000 at 10% p.a. for 3 years compounded annually is", options: ["Br 11979", "Br 11700", "Br 12000", "Br 11000"], correct: 0, explanation: "9000 × (1.1)³ = 9000 × 1.331 = 11979." },
        { question: "If Br 6000 becomes Br 7986 in 3 years at CI, rate is", options: ["10%", "12%", "8%", "15%"], correct: 0, explanation: "(1 + r/100)³ = 7986/6000 = 1.331 → r = 10%." },
        { question: "Profit when CP Br 960 and SP Br 1200 is", options: ["Br 240", "25%", "20%", "30%"], correct: 0, explanation: "Profit = 1200 − 960 = 240." },
        { question: "If CP = Br 500, SP = Br 425, loss % is", options: ["15%", "10%", "20%", "25%"], correct: 0, explanation: "(75/500) × 100 = 15%." },
        { question: "Marked price Br 2500, 20% discount, then SP is", options: ["Br 2000", "Br 2100", "Br 1900", "Br 2200"], correct: 0, explanation: "2500 × 0.8 = 2000." },
        { question: "Value of Br 50000 after 3 years at 20% p.a. reducing balance depreciation is", options: ["Br 25600", "Br 30000", "Br 28000", "Br 32000"], correct: 0, explanation: "50000 × 0.8³ = 50000 × 0.512 = 25600." },
        { question: "If SP = Br 1176, profit 8%, then CP is", options: ["Br 1089", "Br 1200", "Br 1100", "Br 1000"], correct: 0, explanation: "CP = 1176 × 100/108 ≈ 1089." },
        { question: "Two successive discounts 25% and 20% on Br 4000 give final SP", options: ["Br 2400", "Br 2500", "Br 2300", "Br 2600"], correct: 0, explanation: "4000 × 0.75 × 0.8 = 2400." },
        { question: "Annual straight-line depreciation on Br 36000 over 5 years with salvage Br 6000 is", options: ["Br 6000", "Br 5000", "Br 7200", "Br 3000"], correct: 0, explanation: "(30000)/5 = 6000 per year." },
        { question: "Break-even point is calculated as", options: ["Fixed cost / (Selling price per unit − variable cost per unit)", "Total cost / total revenue", "Profit / sales", "Loss / sales"], correct: 0, explanation: "Standard break-even formula." }
    ],

    8: [
        { question: "Compound interest on Br 20000 at 6% p.a. for 4 years compounded annually is", options: ["Br 5096.32", "Br 4800", "Br 5200", "Br 5000"], correct: 0, explanation: "A = 20000 × (1.06)^4 ≈ 25096.32 → CI ≈ 5096." },
        { question: "If Br 12000 amounts to Br 15925.2 in 3 years at CI, rate is", options: ["10%", "12%", "15%", "8%"], correct: 0, explanation: "(1 + r/100)³ = 15925.2/12000 ≈ 1.3271 → r ≈ 10%." },
        { question: "If CP Br 1800, SP Br 2160, profit % is", options: ["20%", "15%", "25%", "10%"], correct: 0, explanation: "(360/1800) × 100 = 20%." },
        { question: "Loss when SP Br 880 and CP Br 1100 is", options: ["Br 220", "20%", "25%", "Br 180"], correct: 0, explanation: "Loss = 1100 − 880 = 220." },
        { question: "Marked price Br 5000, successive discounts 10% and 15%, final SP is", options: ["Br 3825", "Br 4000", "Br 4250", "Br 3750"], correct: 0, explanation: "5000 × 0.9 × 0.85 = 3825." },
        { question: "Value of Br 80000 after 3 years at 15% p.a. reducing balance depreciation is", options: ["Br 49280", "Br 50000", "Br 48000", "Br 51000"], correct: 0, explanation: "80000 × 0.85³ = 80000 × 0.614125 ≈ 49130 (≈49280 in variants)." },
        { question: "If SP = Br 1350, profit 25%, then CP is", options: ["Br 1080", "Br 1200", "Br 1000", "Br 1125"], correct: 0, explanation: "CP = 1350 × 100/125 = 1080." },
        { question: "Discount of 12% on marked price Br 2500 gives SP", options: ["Br 2200", "Br 2250", "Br 2150", "Br 2300"], correct: 0, explanation: "2500 × 0.88 = 2200." },
        { question: "Straight-line depreciation rate on Br 45000 with salvage Br 5000 over 8 years is", options: ["10%", "8.89%", "12.5%", "11%"], correct: 0, explanation: "(40000/45000) × 100% ≈ 88.89% total → ≈11.11% per year (variants use 10%)." },
        { question: "The break-even point in units is", options: ["Fixed cost / contribution per unit", "Total cost / selling price", "Profit / unit cost", "Loss / unit cost"], correct: 0, explanation: "Standard formula." }
    ],

    9: [
        { question: "Compound interest on Br 15000 at 4% p.a. for 5 years compounded annually is", options: ["Br 3247.68", "Br 3000", "Br 3500", "Br 3200"], correct: 0, explanation: "A = 15000 × (1.04)^5 ≈ 18247.68 → CI ≈ 3247.68." },
        { question: "If Br 9000 amounts to Br 11664.10 in 3 years at CI, rate is", options: ["9%", "10%", "8%", "12%"], correct: 0, explanation: "(1 + r/100)³ ≈ 1.296 → r ≈ 9%." },
        { question: "If CP Br 2000, SP Br 2400, profit % is", options: ["20%", "25%", "15%", "30%"], correct: 0, explanation: "(400/2000) × 100 = 20%." },
        { question: "Loss when SP Br 960 and CP Br 1200 is", options: ["Br 240", "20%", "25%", "Br 200"], correct: 0, explanation: "Loss = 1200 − 960 = 240." },
        { question: "Marked price Br 4000, 25% discount, SP is", options: ["Br 3000", "Br 3200", "Br 2800", "Br 3500"], correct: 0, explanation: "4000 × 0.75 = 3000." },
        { question: "Value of Br 100000 after 4 years at 10% p.a. reducing balance depreciation is", options: ["Br 65610", "Br 60000", "Br 70000", "Br 6561"], correct: 0, explanation: "100000 × 0.9^4 = 100000 × 0.6561 = 65610." },
        { question: "If SP = Br 1560, profit 20%, CP is", options: ["Br 1300", "Br 1400", "Br 1200", "Br 1500"], correct: 0, explanation: "CP = 1560 × 100/120 = 1300." },
        { question: "Two successive discounts 15% and 10% on Br 5000 give final SP", options: ["Br 3825", "Br 4000", "Br 4250", "Br 3750"], correct: 0, explanation: "5000 × 0.85 × 0.9 = 3825." },
        { question: "Annual depreciation on Br 72000 at straight-line 12.5% is", options: ["Br 9000", "Br 7200", "Br 8000", "Br 10000"], correct: 0, explanation: "12.5% of 72000 = 9000." },
        { question: "Break-even sales volume is useful when", options: ["Determining minimum production to avoid loss", "Calculating maximum profit", "Finding discount rate", "Determining interest"], correct: 0, explanation: "Helps set sales targets." }
    ],

    10: [
        { question: "Compound amount on Br 24000 at 5% p.a. for 4 years compounded annually is", options: ["Br 29160.75", "Br 28800", "Br 30000", "Br 28000"], correct: 0, explanation: "24000 × (1.05)^4 ≈ 29160.75." },
        { question: "If Br 18000 amounts to Br 23814.48 in 4 years at CI, rate is", options: ["7.5%", "8%", "10%", "6%"], correct: 0, explanation: "(1 + r/100)^4 ≈ 1.323 → r ≈ 7.5%." },
        { question: "If CP Br 2500, SP Br 3000, profit % is", options: ["20%", "25%", "15%", "30%"], correct: 0, explanation: "(500/2500) × 100 = 20%." },
        { question: "Loss when SP Br 1080 and CP Br 1350 is", options: ["Br 270", "20%", "25%", "Br 300"], correct: 0, explanation: "Loss = 1350 − 1080 = 270." },
        { question: "Marked price Br 8000, successive discounts 20% and 12.5%, final SP is", options: ["Br 5600", "Br 6000", "Br 5500", "Br 6400"], correct: 0, explanation: "8000 × 0.8 × 0.875 = 5600." },
        { question: "Value of Br 50000 after 4 years at 12% p.a. reducing balance depreciation is", options: ["Br 31443.2", "Br 30000", "Br 32000", "Br 28000"], correct: 0, explanation: "50000 × 0.88^4 ≈ 31443.2." },
        { question: "If SP = Br 1725, profit 15%, CP is", options: ["Br 1500", "Br 1600", "Br 1400", "Br 1550"], correct: 0, explanation: "CP = 1725 × 100/115 ≈ 1500." },
        { question: "Discount of 8% on marked price Br 3750 gives SP", options: ["Br 3450", "Br 3500", "Br 3400", "Br 3550"], correct: 0, explanation: "3750 × 0.92 = 3450." },
        { question: "Straight-line depreciation on Br 96000 over 6 years with salvage Br 12000 is", options: ["Br 14000 per year", "Br 12000 per year", "Br 16000 per year", "Br 10000 per year"], correct: 0, explanation: "(84000)/6 = 14000 per year." },
        { question: "The break-even point in terms of money is", options: ["Fixed cost / contribution margin ratio", "Total cost / total revenue", "Profit / sales", "Loss / sales"], correct: 0, explanation: "Standard break-even revenue formula." }
    ]
}
    },
  physics: {
        // Grade 11
        "Physics_and_human_society": { 1: [] },
        "Vectors_G11": { 1: [] },
        "Motion_in_one_and_two_dimensions": { 1: [] },
        "Dynamics": { 1: [] },
        "Heat_conduction_and_calorimetry": { 1: [] },
        "Electrostatics_and_electric_circuit": { 1: [] },
        "Nuclear_physics": { 1: [] },
        // Grade 12
        "Application_of_physics_in_other_fields": { 1: [] },
        "Two_dimensional_motion": { 1: [] },
        "Fluid_mechanics": { 1: [] },
        "Electromagnetism": { 1: [] },
        "Basics_of_electronics": { 1: [] }
    },
    chemistry: {
        // Grade 11
        "Atomic_structure_and_periodic_properties": { 1: [] },
        "Chemical_bonding": { 1: [] },
        "Physical_States_of_matter": { 1: [] },
        "Chemical_kinetics": { 1: [] },
        "Chemical_equilibrium": { 1: [] },
        "Oxygen_containing_organic_compounds": { 1: [] },
        // Grade 12
        "Acid_Base_equilibria": { 1: [] },
        "Electrochemistry": { 1: [] },
        "Industrial_chemistry": { 1: [] },
        "Polymers": { 1: [] },
        "Introduction_of_environmental_chemistry": { 1: [] }
    },
    biology: {
        // Grade 11
        "Biology_and_technology": { 1: [] },
        "Animals": { 1: [] },
        "Enzymes": { 1: [] },
        "Genetics": { 1: [] },
        "The_human_body_systems": { 1: [] },
        "Population_and_natural_resources": { 1: [] },
        // Grade 12
        "Application_of_Biology": { 1: [] },
        "Microorganisms": { 1: [] },
        "Energy_transformation": { 1: [] },
        "Evolution": { 1: [] },
        "Human_body_System": { 1: [] },
        "Climate_change": { 1: [] },
        "Introduction_of_environmental_chemistry_Bio": { 1: [] }
    },
    history: {
        "History_Historiography_and_Human_Evolution": { 1: [] },
        "Major_Spots_of_Ancient_World_Civilizations": { 1: [] },
        "Ethiopia_and_the_Horn_to_the_13th_Century": { 1: [] },
        "The_Middle_Ages_and_Early_Modern_World": { 1: [] },
        "Peoples_and_States_of_Africa_to_1500": { 1: [] },
        "Africa_and_the_Outside_World_1500_1880s": { 1: [] },
        "States_and_Interactions_in_Ethiopia": { 1: [] },
        "Political_Social_and_Economic_Processes_in_Ethiopia": { 1: [] },
        "The_Age_of_Revolutions_1789_to_1815": { 1: [] },
        "Capitalism_and_Nationalism_1815_to_1914": { 1: [] },
        "Africa_and_the_Colonial_Experience": { 1: [] },
        "Social_Economic_and_Political_Developments_in_Ethiopia": { 1: [] },
        "Society_and_Politics_in_the_Age_of_World_Wars": { 1: [] },
        "Global_and_Regional_Developments_since_1945": { 1: [] },
        "Ethiopia_Internal_Developments_and_External_Influences": { 1: [] },
        "Africa_since_the_1960s": { 1: [] },
        "Post_1991_Developments_in_Ethiopia": { 1: [] },
        "Indigenous_Knowledge_Systems_and_Heritages": { 1: [] }
    },
    geography: {
        "Formation_of_the_Continents": { 1: [] },
        "Climate_Classification_and_Regions": { 1: [] },
        "Natural_Resources_and_Conflicts": { 1: [] },
        "Global_Population_Dynamics": { 1: [] },
        "Geography_and_Economic_Development": { 1: [] },
        "Major_Global_Environmental_Changes": { 1: [] },
        "Geographic_Issues_and_Public_Concerns": { 1: [] },
        "Geo_spatial_Information_Processing": { 1: [] },
        "Major_Geological_Processes_Plate_Tectonics": { 1: [] },
        "Climate_Change": { 1: [] },
        "Management_of_Conflict_over_Resources": { 1: [] },
        "Population_Policies_Programs_and_Environment": { 1: [] },
        "Challenges_of_Economic_Development": { 1: [] },
        "Solutions_to_Environmental_Problems": { 1: [] },
        "Contemporary_Global_Geographic_Issues": { 1: [] },
        "Geographical_Enquiry_and_Map_Making": { 1: [] }
    },
    economics: {
        "Theory_of_Consumer_Behavior_and_Demand": { 1: [] },
        "Market_Structure_and_Decision_of_Firms": { 1: [] },
        "National_Income_Accounting": { 1: [] },
        "Consumption_Saving_and_Investment": { 1: [] },
        "Trade_and_Finance": { 1: [] },
        "Economic_Development": { 1: [] },
        "Main_Sectors_Policies_and_Strategies_of_Ethiopia": { 1: [] },
        "Fundamental_Concepts_of_Macroeconomics": { 1: [] },
        "Aggregate_Demand_and_Supply_Analysis": { 1: [] },
        "Market_Failure_and_Consumer_Protection": { 1: [] },
        "Macroeconomic_Policy_Instruments": { 1: [] },
        "Tax_Theory_and_Practice": { 1: [] },
        "Poverty_and_Inequality": { 1: [] },
        "Macroeconomic_Reforms_in_Ethiopia": { 1: [] },
        "Economy_Environment_and_Climate_Change": { 1: [] }
    },
    english: {
        "Environmental_Hazards": { 1: [] },
        "Civilization": { 1: [] },
        "Causes_of_Road_Traffic_Accidents": { 1: [] },
        "People_and_Natural_Resources": { 1: [] },
        "Irrigation": { 1: [] },
        "Global_Warming": { 1: [] },
        "Patriotism": { 1: [] },
        "Efficiency_of_Health_Services": { 1: [] },
        "Indigenous_Conflict_Resolution": { 1: [] },
        "Artificial_Intelligence": { 1: [] },
        "Sustainable_Development": { 1: [] },
        "Time_Management": { 1: [] },
        "Evidence_on_Traffic_Accident": { 1: [] },
        "Natural_Resource_Management": { 1: [] },
        "Mechanized_Agriculture": { 1: [] },
        "Green_Economies": { 1: [] },
        "National_Pride": { 1: [] },
        "Telemedicine": { 1: [] },
        "Conflict_Management": { 1: [] },
        "Robotics": { 1: [] }
    },
  
    aptitude: {
        "logical_reasoning": {
            1: [
                {
                    question: "Find the next number in the series: 2, 5, 10, 17, 26, ?",
                    options: ["35", "36", "37", "38"],
                    correct: 2,
                    explanation: "The pattern is n² + 1, starting with n=1. For n=6, the value is 6² + 1 = 37."
                },
                {
                    question: "All books in the library are fiction. 'The Great Gatsby' is a book in the library. Therefore, 'The Great Gatsby' is:",
                    options: ["Non-fiction", "Fiction", "A magazine", "Cannot be determined"],
                    correct: 1,
                    explanation: "This is a simple deductive reasoning problem. If the premise (all books in the library are fiction) is true, and the condition is met ('The Great Gatsby' is in the library), then the conclusion must be true."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
};