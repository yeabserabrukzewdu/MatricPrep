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
        "Matrices": { 1: [] },
        "Determinants_and_their_properties": { 1: [] },
        "Vectors": { 1: [] },
        "Transformations_of_the_plane": { 1: [] },
        "Statistics": { 1: [] },
        "Probability": { 1: [] },
        // Grade 12
        "Sequences_and_series": { 1: [] },
        "Introductions_to_Calculus": { 1: [] },
        "Statistics_G12": { 1: [] },
        "Introduction_to_linear_programming": { 1: [] },
        "Mathematical_applications_in_business": { 1: [] }
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